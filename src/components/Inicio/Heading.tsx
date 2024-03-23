import { SaludoIcon } from '@components/icons'
import { AnimatedGradientText } from '@components/ui/'

export const Heading = () => {

    return (
        <div id='heading'>
            <div className="flex items-center gap-2 pt-2 text-neutral-800 dark:text-neutral-200">
                <SaludoIcon />
                <p style={{ fontSize: 'clamp(0.9em, 3.5dvw, 2em)' }} className="leading-5">Hola, me llamo</p>
            </div>
            <AnimatedGradientText
                headingOrder='h1'
                text='Fernando Rodriguez'
                fontSize='clamp(2em, 3.7dvw, 4.5em)'
            />
            <span className="flex flex-row items-baseline gap-2 text-neutral-800 dark:text-neutral-200">
                <p style={{ fontSize: 'clamp(1.1em, 3.5dvw, 2em)' }} className="leading-5">y soy</p>
                <h1 style={{ fontSize: 'clamp(1.1em, 3.5dvw, 2em)' }} className="text-right font-extrabold leading-6 2xl:leading-tight">desarrollador Frontend</h1>
            </span>
        </div>
    )
}
