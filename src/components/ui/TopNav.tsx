import { useState, useEffect } from 'react';
import github_img from '@img/skills/github-logo.svg';
import linkedin_img from '@img/skills/linkedin-logo.svg';
import { Link } from 'react-router-dom';
import { Box } from './Box';

export const TopNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };

    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`absolute top-0 h-full w-full overflow-hidden`}>
            <Box>
                <div className='mx-auto flex flex-row items-center justify-between border-b border-neutral-400 p-2 text-white'>

                    <div className='z-20 flex gap-2'>
                        <a href='https://github.com/SurvivingCuriosity'>
                            <img className='size-7' src={github_img} alt='Logo Github'></img>
                        </a>
                        <a href='https://www.linkedin.com/in/ferrodest/'>
                            <img className='size-7' src={linkedin_img} alt='Logo Linkedin'></img>
                        </a>
                    </div>

                    <button onClick={toggleMenu} className="z-20 flex size-6 flex-col justify-center gap-2">
                        <span className={`${isOpen ? 'rotate-[45deg] scale-[120%]' : 'rotate-0'} h-0.5 w-full rounded-lg bg-white transition-all duration-200 origin-top-left`}></span>
                        <span className={`${isOpen ? 'opacity-0' : 'opacity-1'} h-0.5 w-full rounded-lg bg-white transition-all duration-200 origin-bottom-left`}></span>
                        <span className={`${isOpen ? '-rotate-[45deg] scale-[120%]' : 'rotate-0'} h-0.5 w-full rounded-lg bg-white transition-all duration-200 origin-bottom-left`}></span>
                    </button>


                    <div className={`absolute top-0 z-10 h-dvh w-screen bg-black/90 backdrop-blur-[2px] ${isOpen ? 'left-0' : 'left-full'} transition-all duration-200 pt-20 px-7`}>
                        <div className='border'>
                            <ul>
                                <li><Link to='#'>Inicio</Link></li>
                                <li><Link to='#'>Proyectos</Link></li>
                                <li><Link to='#'>Experiencia</Link></li>
                                <li><Link to='#'>Contacto</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </Box>
        </div>
    );
};
