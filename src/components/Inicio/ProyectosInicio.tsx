import { SectionInicio } from './SectionInicio'
import './ProyectosInicio.module.css'
import { Proyectos } from '@db/Proyectos'

export const ProyectosInicio = () => {
    return (
        <SectionInicio titulo='Proyectos'>
            <div id='proyectos-container' className='flex min-h-dvh flex-col gap-6 lg:p-4 xl:p-8'>
                {Proyectos.map(proyecto => (
                    <section key={proyecto.nombre} className="bg-neutral-100 md:min-h-max dark:bg-neutral-700/20">
                    <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <div className='proyectos-info-wrapper'>
                                <span className='mb-4 flex items-center gap-2'>
                                    <h3 className="max-w-2xl text-3xl font-extrabold leading-none tracking-tight text-neutral-700 md:text-5xl xl:text-6xl dark:text-white">{proyecto.nombre}</h3>
                                    <img src={proyecto.icono} alt="Icono del proyecto" className='size-10 xl:size-12'/>
                                </span>
                                <p className="mb-6 max-w-2xl font-light text-neutral-500 md:text-lg lg:mb-8 lg:text-xl dark:text-neutral-400">{proyecto.descripcionCorta}</p>
                            </div>
                            <a href={proyecto.urlGithub} target='_blank' className="proyectos-link bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-neutral-800 focus:ring-4 dark:text-white">
                                Github
                                <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                            <a href={proyecto.urlProyecto} target='_blank' className="proyectos-link inline-flex items-center justify-center rounded-lg border border-neutral-800 px-5 py-3 text-center text-base font-medium text-neutral-800 hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 dark:border-neutral-200 dark:text-white dark:hover:bg-neutral-800 dark:focus:ring-neutral-800">
                                Aplicación
                            </a>
                        </div>
                        <div className="proyectos-img-wrapper hidden aspect-video lg:col-span-5 lg:mt-0 lg:flex">
                            <img src={proyecto.imagen} alt="mockup"/>
                        </div>
                    </div>
                </section>
                ))}
                
            </div>
        </SectionInicio>
    )
}
