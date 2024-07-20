import { SaludoIcon } from '@components/icons'
import { TEMA, useAppContext } from './context/AppContext'

export const Heading = () => {
    const { tema } = useAppContext()
    return (
        <div id='heading'>
            <div className="flex items-center gap-2 pt-2 text-neutral-800 dark:text-neutral-200">
                <SaludoIcon />
                <p style={{ fontSize: 'clamp(0.9em, 3.5dvw, 2em)' }} className="leading-5">Hola, me llamo</p>
            </div>
            <span className='animated-text-wrapper block'>
            <h1 className={`text-3xl md:text-6xl font-extrabold leading-normal 2xl:leading-tight animate-text bg-gradient-to-r bg-clip-text text-transparent
        ${tema === TEMA.dark
                    ? ' from-yellow-400 via-orange-500 to-yellow-400'
                    : ' from-sky-700 via-cyan-500 to-sky-700'
                }`}>
                Fernando Rodríguez
            </h1>
        </span>
            <span className="flex flex-row items-baseline gap-2 text-neutral-800 dark:text-neutral-200">
                <p style={{ fontSize: 'clamp(1.1em, 3.5dvw, 2em)' }} className="leading-5">y soy</p>
                <h1 style={{ fontSize: 'clamp(1.1em, 3.5dvw, 2em)' }} className="text-right font-extrabold">desarrollador Frontend</h1>
            </span>
        </div>
    )
}
