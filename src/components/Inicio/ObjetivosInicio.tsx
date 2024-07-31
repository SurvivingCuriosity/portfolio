import { SectionInicio } from './SectionInicio'

export const ObjetivosInicio = () => {


    const objetivos = [
        { id: 1, checked: false, text: 'Comprar pan' },
        { id: 2, checked: false, text: 'Comprar pan' },
        { id: 3, checked: false, text: 'Comprar pan' },
        { id: 4, checked: false, text: 'Comprar pan' },
        { id: 5, checked: false, text: 'Comprar pan' },
        { id: 6, checked: false, text: 'Comprar pan' },
    ]

    return (
        <SectionInicio titulo='Objetivos'>
            <div id='proyectos-container' className='flex min-h-dvh flex-col gap-6 lg:p-4 xl:gap-12 xl:p-8 2xl:gap-32'>
                <section className="proyecto-container flex scroll-m-44 flex-col gap-8 bg-neutral-100 xl:min-h-[450px] dark:bg-neutral-700/20">
                    {objetivos.map((objetivo) => (
                        <span  className='flex flex-row gap-4' key={objetivo.id}>
                            <input aria-disabled="true" readOnly
                            aria-label="Future goal 1 (visual only)" type="checkbox" className="scale-[200%] accent-lime-500" checked={objetivo.checked} />
                            <p className='text-2xl font-bold text-neutral-800'>{objetivo.text}</p>
                        </span>
                    ))}
                </section>

            </div>
        </SectionInicio>
    )
}
