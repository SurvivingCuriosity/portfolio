import { AnimatedGradientText } from '@components/ui/'
import saludo_img from '@img/icons/saludo_icon_trans.svg'

export const Heading = () => {

    

    
    return (
        <div>
            <div className="flex items-center gap-2 pt-2 text-neutral-200">
                <img className='2xl:size-22 size-7 animate-wave md:size-8 lg:size-10 xl:size-10' src={saludo_img} alt='Icono mano saludando'></img>
                <p style={{ fontSize: 'clamp(1.1em, 3.5dvw, 2em)' }} className="font-light leading-5">Hola, me llamo</p>
            </div>
            <AnimatedGradientText
                headingOrder='h1'
                text='Fernando Rodriguez'
                fontSize='clamp(2.1em, 3.7dvw, 4.5em)'
            />
            <span className="flex flex-row items-baseline gap-2 text-neutral-200">
                <p style={{ fontSize: 'clamp(1.2em, 3.5dvw, 2em)' }} className="font-light leading-5">y soy</p>
                <h1 style={{ fontSize: 'clamp(1.2em, 3.5dvw, 2em)' }} className="text-right font-extrabold leading-6 2xl:leading-tight">desarrollador Frontend</h1>
            </span>
        </div>
    )
}
