import { AnimatedGradientText } from '@components/ui'

export interface SectionInicioProps {
    titulo: string,
    children: JSX.Element[]
}
export const SectionInicio = ({ titulo, children }: SectionInicioProps) => {
    return (
        <div className='space-y-2'>
            <AnimatedGradientText
                headingOrder='h2'
                text={titulo}
            />
            {children}
        </div>
    )
}
