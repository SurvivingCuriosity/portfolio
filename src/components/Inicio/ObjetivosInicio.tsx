import { SectionInicio } from './SectionInicio'

export const ObjetivosInicio = () => {
    return (
        <SectionInicio titulo='Objetivos'>
            <div id='proyectos-container' className='flex min-h-dvh flex-col gap-6 lg:p-4 xl:gap-12 xl:p-8 2xl:gap-32'>
                <section className="proyecto-container flex scroll-m-44 flex-col gap-8 bg-neutral-100 xl:min-h-[450px] dark:bg-neutral-700/20">
                    <span className='flex flex-row gap-4'>
                        <input type="checkbox" className="scale-[200%] accent-lime-500" checked />
                        <p className='text-2xl font-bold text-neutral-800'>Comprar pan</p>
                    </span>
                    <span className='flex flex-row gap-4'>
                        <input type="checkbox" className="scale-[200%] accent-lime-500" checked />
                        <p className='text-2xl font-bold text-neutral-800'>Comprar pan</p>
                    </span>
                    <span className='flex flex-row gap-4'>
                        <input type="checkbox" className="scale-[200%] accent-lime-500" checked />
                        <p className='text-2xl font-bold text-neutral-800'>Comprar pan</p>
                    </span>
                    <span className='flex flex-row gap-4'>
                        <input type="checkbox" className="scale-[200%] accent-lime-500" checked />
                        <p className='text-2xl font-bold text-neutral-800'>Comprar pan</p>
                    </span>
                    <span className='flex flex-row gap-4'>
                        <input type="checkbox" className="scale-[200%] accent-lime-500" checked />
                        <p className='text-2xl font-bold text-neutral-800'>Comprar pan</p>
                    </span>
                </section>

            </div>
        </SectionInicio>
    )
}
