import { SectionInicio } from './SectionInicio'

export const ObjetivosInicio = () => {


    const objetivos = [
        { id: 1, checked: true, text: 'Meta Front-End Dev Certificate' },
        { id: 2, checked: true, text: 'Use RTK Query' },
        { id: 3, checked: true, text: 'Use Google Cloud Platform' },
        { id: 4, checked: false, text: 'Learn Next.JS' },
        { id: 5, checked: false, text: 'Improve Node.JS skills' },
        { id: 6, checked: false, text: 'Learn AWS' },
    ]

    return (
        <SectionInicio titulo='Objetivos'>
            <div id='proyectos-container' className='flex min-h-dvh flex-col gap-6 lg:p-4 xl:gap-12 xl:p-8 2xl:gap-32'>
                <section className="proyecto-container flex scroll-m-44 flex-col gap-8 bg-neutral-100 p-2 xl:min-h-[450px] dark:bg-neutral-700/20">
                    {objetivos.map((objetivo) => (
                        <span className='flex flex-row gap-4 px-2' key={objetivo.id}>
                            <input aria-disabled="true" readOnly
                            aria-label={`Objetivo: ${objetivo.text}`} type="checkbox" className="scale-[170%] accent-neutral-700 dark:accent-amber-500" checked={objetivo.checked} />
                            <p className='text-lg font-bold text-neutral-700 dark:text-neutral-300'>{objetivo.text}</p>
                        </span>
                    ))}
                </section>

            </div>
        </SectionInicio>
    )
}
