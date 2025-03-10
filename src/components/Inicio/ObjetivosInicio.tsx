import { SectionInicio } from './SectionInicio'

export const MasSobreMiInicio = () => {

    return (
        <SectionInicio titulo='More about me'>
            <div id='proyectos-container' className='flex min-h-dvh flex-col gap-6 lg:p-4 xl:gap-12 xl:p-8 2xl:gap-32'>
                <section className="proyecto-container flex scroll-m-44 flex-col gap-8 bg-neutral-100 p-2 xl:min-h-[450px] dark:bg-neutral-700/20">
                    <p className='text-xl text-neutral-300'><a className="underline" target="blank" href="https://linkedin.com/in/ferrodest">Ask</a> if you want to know more aboyut me ;)</p>
                </section>

            </div>
        </SectionInicio>
    )
}
