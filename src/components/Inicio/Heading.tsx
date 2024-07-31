import { TEMA } from './context/AppContext'
import { useAppContext } from './context/useAppContext'

export const Heading = () => {
    const { tema } = useAppContext()
    return (
        <div id='heading' className='flex flex-col'>
            <p className='text-xl leading-tight text-neutral-800 xl:text-2xl dark:text-neutral-400'>Hi there! My name is</p> 
            <span className='animated-text-wrapper block'>
                <h1 className={`pb-2 text-4xl tracking-tighter whitespace-nowrap md:text-6xl 2xl:text-7xl font-extrabold animate-text bg-gradient-to-r bg-clip-text text-transparent
        ${tema === TEMA.dark
                        ? ' from-yellow-400 via-orange-500 to-yellow-400'
                        : ' from-neutral-700 via-neutral-500 to-neutral-700'
                    }`}>
                    Fernando Rodríguez
                </h1>
            </span>
            <h2 className="text-2xl font-extrabold leading-tight text-neutral-800 lg:text-3xl dark:text-neutral-400">Frontend Developer</h2>
        </div>
    )
}
