import { TEMA, useAppContext } from 'context/AppContext'
import moon_icon from '@img/icons/moon_icon.svg'
import sun_icon from '@img/icons/sun_icon.svg'

export const ThemeSwitcher = () => {

    const {tema, toggleTema} = useAppContext()

    return (
        <button onClick={() => { toggleTema() }} className='flex w-fit items-center gap-4 rounded-lg p-1 px-3 text-sm transition-colors duration-200 hover:bg-neutral-800/40'>

            {tema === TEMA.light
                ?
                <>
                    <img src={moon_icon} className='size-7' alt='Icono luna'></img>
                </>
                :
                <>
                    <button>
                        <img src={sun_icon} className='size-7' alt='Icono sol'></img>
                    </button>
                </>
            }
        </button>
    )
}
