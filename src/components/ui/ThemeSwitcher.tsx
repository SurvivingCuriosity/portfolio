import { TEMA } from '@components/Inicio/context/AppContext'
import { useAppContext } from '@components/Inicio/context/useAppContext'
import moon_icon from '@img/icons/moon_icon.svg'
import sun_icon from '@img/icons/sun_icon.svg'

export const ThemeSwitcher = () => {

    const { tema, toggleTema } = useAppContext()

    return (
        <button onClick={() => { toggleTema() }} className='flex aspect-square w-fit items-center gap-4 rounded-lg border border-neutral-700 p-2 text-sm transition-colors duration-200 hover:bg-neutral-800/40 dark:border-neutral-300'>

            {tema === TEMA.light
                ?
                <img src={moon_icon} className='size-7' alt='Icono luna'></img>
                :
                <img src={sun_icon} className='size-7' alt='Icono sol'></img>
            }
            
        </button>
    )
}
