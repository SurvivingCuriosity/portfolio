import { AnimatedGradientText } from '@components/ui'

export interface SectionInicioProps {
    titulo: string,
    children: JSX.Element[] | JSX.Element
}
export const SectionInicio = ({ titulo, children }: SectionInicioProps) => {
    return (
        <div className='space-y-2'>
            <AnimatedGradientText
                headingOrder='h2'
                text={titulo}
                fontSize='clamp(1.5em, 4dvw, 3.5em)'
            />
            {children}
        </div>
    )
}
