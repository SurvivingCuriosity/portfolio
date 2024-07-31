import { PhoneMockup } from '@components/mockups/PhoneMockup'
import { ButtonScrollTo } from '@components/ui/ButtonScrollTo'
import { Proyectos } from '@db/Proyectos'
import { Link } from 'react-router-dom'
import { SectionInicio } from './SectionInicio'
import { LaptopMockup } from '@components/mockups/LaptopMockup'
import { GithubIcon } from '@components/icons'

export const ProyectosInicio = () => {

    return (
        <SectionInicio titulo='Projects'>
            <div id='proyectos-container' className='flex min-h-dvh flex-col gap-6 lg:p-4 xl:gap-12 xl:p-8 2xl:gap-32'>
                {Proyectos.map((proyecto, index) => (
                    <section key={proyecto.nombre} id={`proyecto-${index}`} className="proyecto-container relative scroll-m-44 bg-neutral-100/70 shadow-lg xl:min-h-[450px] dark:bg-neutral-900/70">
                        <div className='p-2 xl:p-4 2xl:p-8'>
                            <div className='flex flex-col xl:flex-row xl:justify-between xl:gap-8'>
                                <div id="main-info-proyecto" className='xl: flex h-full flex-col justify-start xl:justify-between'>
                                    <span className='flex items-center gap-2'>
                                        <h3 className="text-4xl font-extrabold leading-none tracking-tight text-neutral-700 md:text-5xl xl:text-6xl dark:text-white">{proyecto.nombre}</h3>
                                        <img loading='lazy' src={proyecto.icono} alt="Icono del proyecto" className='size-6 xl:size-12' />
                                    </span>

                                    <p className="my-4 font-light text-neutral-500 md:text-lg lg:mb-8 lg:text-xl dark:text-neutral-400">{proyecto.descripcionCorta}</p>

                                    <span className='my-4 flex items-center gap-2'>
                                        <a href={proyecto.urlGithub} target='_blank' className="proyectos-link"> <GithubIcon /> </a>
                                        <a href={proyecto.urlProyecto} target='_blank' className="proyectos-link text-sm underline underline-offset-2 dark:text-neutral-400"> {proyecto.urlProyecto.slice(0, proyecto.urlProyecto.length - 1)} </a>
                                    </span>
                                </div>


                                <div id="imagen-proyecto" className="mx-auto my-4 flex w-full items-center justify-between sm:w-11/12 xl:my-8 xl:w-7/12 2xl:w-5/12">
                                    <span className='aspect-[9/16] w-[100px] sm:w-[120px] md:w-[160px]'>
                                        <PhoneMockup>
                                            <img loading='lazy' src={proyecto.imagen_movil} alt="mockup" style={{ width: '100%' }} />
                                        </PhoneMockup>
                                    </span>
                                    <span className='w-[300px] sm:w-[400px] md:w-[500px]'>
                                        <LaptopMockup>
                                            <img loading='lazy' src={proyecto.imagen_pc} alt="mockup" style={{ height: '100%' }} />
                                        </LaptopMockup>
                                    </span>
                                </div>
                            </div>
                            <Link preventScrollReset={true} to={`proyectos/${proyecto.path}`} className={`proyectos-link my-2 ml-auto block w-fit text-right text-neutral-800 underline-offset-2 hover:underline dark:text-neutral-400`}>More details</Link>

                            {index !== Proyectos.length - 1 &&
                                <div className='mx-auto mt-2 flex justify-center'>
                                    <ButtonScrollTo
                                        path={`#proyecto-${index + 1}`}
                                    />
                                </div>
                            }

                        </div>
                    </section>
                ))}

            </div>
        </SectionInicio>
    )
}
