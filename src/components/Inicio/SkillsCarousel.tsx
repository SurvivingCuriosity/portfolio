
import { useEffect, useRef } from 'react';
import { Chip } from '@components/ui';
import { Skills } from '@db/SkillsInfinteScroll';
import { TEMA, useAppContext } from 'context/AppContext';


export const SkillsCarousel = () => {

    const {tema} = useAppContext()

    const logosRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (logosRef.current) {
            const ul = logosRef.current;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            const nextNode = ul.nextSibling;
            if (nextNode && 'setAttribute' in nextNode) {
                (nextNode as HTMLElement).setAttribute('aria-hidden', 'true');
            }
        }
    }, []);

    return (

        <ul ref={logosRef} className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4" >
            {Skills.map(skill => (
                <li key={skill.id}>
                    <Chip
                        text={skill.label}
                        fondo={skill.fondo}
                        color={tema === TEMA.dark ? skill.color : skill.colorOscuro}
                        img={skill.img}
                        imgAlt={skill.imgAlt}
                    />
                </li>
            ))}
        </ul>
    )
}
