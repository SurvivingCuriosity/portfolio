import { IDIOMA, useAppContext } from 'context/AppContext'
import uk_icon from '@img/icons/uk_flag.svg'
import spain_icon from '@img/icons/spain_flag.svg'

export const LanguagePicker = () => {

    const {cambiarIdioma,idioma} = useAppContext()

    return (
        <button onClick={() => { cambiarIdioma(idioma === IDIOMA.es ? IDIOMA.en : IDIOMA.es) }} className='flex w-fit items-center gap-4 rounded-lg p-1 px-3 text-sm transition-colors duration-200 hover:bg-neutral-800/40'>

            {idioma === IDIOMA.es
                ?
                <>
                    <img src={uk_icon} className='size-10' alt='Bandera británica'></img>
                </>
                :
                <>
                    <img src={spain_icon} className='size-10' alt='Bandera española'></img>
                </>
            }
        </button>
    )
}
