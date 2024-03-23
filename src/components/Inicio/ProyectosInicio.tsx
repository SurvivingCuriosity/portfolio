import { SectionInicio } from './SectionInicio'
import img_lemonade from '@img/proyectos/lemonade.png'
import img_lemonade_movil from '@img/proyectos/lemonade_movil.png'
import './ProyectosInicio.module.css'

export const ProyectosInicio = () => {
    return (
        <SectionInicio titulo='Proyectos'>
            <div id='proyectos-container' className='flex min-h-dvh flex-col gap-6 lg:p-4 xl:p-8'>
                <section className="min-h-[500px] bg-white md:min-h-max dark:bg-neutral-700/20">
                    <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <div className='proyectos-info-wrapper'>
                                <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Lemonade</h1>
                                <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">Aplicación dirigida a productores musicales. Conjunto de herramientas para obtener metadatos de canciones de Spotify con el fin de crear remixes o 'mash-ups'.</p>
                            </div>
                            <a href="#" className="proyectos-link bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4">
                                Github
                                <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                            <a href="#" className="proyectos-link inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Aplicación
                            </a>
                        </div>
                        <div className="proyectos-img-wrapper hidden lg:col-span-5 lg:mt-0 lg:flex">
                            <img src={img_lemonade} alt="mockup" />
                        </div>
                    </div>
                </section>
                <section className="min-h-[500px] bg-white dark:bg-neutral-700/20">
                    <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <div className='proyectos-info-wrapper'>
                                <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Lemonade</h1>
                                <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">Aplicación dirigida a productores musicales. Conjunto de herramientas para obtener metadatos de canciones de Spotify con el fin de crear remixes o 'mash-ups'.</p>
                            </div>
                            <a href="#" className="proyectos-link bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4">
                                Github
                                <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                            <a href="#" className="proyectos-link inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Aplicación
                            </a>
                        </div>
                        <div className="proyectos-img-wrapper hidden lg:col-span-5 lg:mt-0 lg:flex">
                            <img src={img_lemonade_movil} alt="mockup" />
                        </div>
                    </div>
                </section>
                <section className="min-h-[500px] bg-white dark:bg-neutral-700/20">
                    <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <div className='proyectos-info-wrapper'>
                                <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Lemonade</h1>
                                <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">Aplicación dirigida a productores musicales. Conjunto de herramientas para obtener metadatos de canciones de Spotify con el fin de crear remixes o 'mash-ups'.</p>
                            </div>
                            <a href="#" className="proyectos-link bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4">
                                Github
                                <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                            <a href="#" className="proyectos-link inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Aplicación
                            </a>
                        </div>
                        <div className="proyectos-img-wrapper hidden lg:col-span-5 lg:mt-0 lg:flex">
                            <img src={img_lemonade} alt="mockup" />
                        </div>
                    </div>
                </section>
                <section className="min-h-[500px] bg-white dark:bg-neutral-700/20">
                    <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <div className='proyectos-info-wrapper'>
                                <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Lemonade</h1>
                                <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">Aplicación dirigida a productores musicales. Conjunto de herramientas para obtener metadatos de canciones de Spotify con el fin de crear remixes o 'mash-ups'.</p>
                            </div>
                            <a href="#" className="proyectos-link bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4">
                                Github
                                <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                            <a href="#" className="proyectos-link inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Aplicación
                            </a>
                        </div>
                        <div className="proyectos-img-wrapper hidden lg:col-span-5 lg:mt-0 lg:flex">
                            <img src={img_lemonade_movil} alt="mockup" />
                        </div>
                    </div>
                </section>
            </div>
        </SectionInicio>
    )
}
