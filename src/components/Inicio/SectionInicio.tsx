
export interface SectionInicioProps {
    titulo: string,
    children: JSX.Element[] | JSX.Element
}
export const SectionInicio = ({ titulo, children }: SectionInicioProps) => {
    return (
        <div className='space-y-2'>
            <h2 className='my-2 text-4xl font-extrabold tracking-tighter text-neutral-700 md:text-6xl dark:text-amber-600'>{titulo}</h2>
            {children}
        </div>
    )
}
