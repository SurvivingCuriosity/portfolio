import { LaptopMockup } from '@components/mockups/LaptopMockup'
import { PhoneMockup } from '@components/mockups/PhoneMockup'
import { Chip } from '@components/ui'
import { Proyectos } from '@db/Proyectos'
import { ScrollRestoration, useParams } from 'react-router-dom'

export const DetalleProyecto = () => {

    const { idProyecto } = useParams()
    const proyecto = Proyectos.find(p => p.path === idProyecto)

    if (proyecto === undefined) return <p>Error proyecto not found</p>

    return (
        <section key={proyecto.nombre} className="relativemd:min-h-max">
            <div className="mx-auto grid max-w-screen-xl px-4 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <div className='proyectos-info-wrapper'>
                        <span className='mb-4 flex items-center gap-2'>
                            <h3 className="max-w-2xl text-3xl font-extrabold leading-none tracking-tight text-neutral-700 md:text-5xl xl:text-6xl dark:text-white">{proyecto.nombre}</h3>
                            <img src={proyecto.icono} alt="Icono del proyecto" className='size-10 xl:size-12' />
                        </span>
                        <p className="text-prettytext-neutral-800 my-3 max-w-2xl md:text-lg lg:mb-8 lg:text-xl dark:text-neutral-300">{proyecto.descripcionCorta}</p>
                    </div>
                    {/* <a href={proyecto.urlGithub} target='_blank' className="proyectos-link bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-neutral-800 focus:ring-4 dark:text-white">
                        Github
                        <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href={proyecto.urlProyecto} target='_blank' className="proyectos-link inline-flex items-center justify-center rounded-lg border border-neutral-800 px-5 py-3 text-center text-base font-medium text-neutral-800 hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 dark:border-neutral-200 dark:text-white dark:hover:bg-neutral-800 dark:focus:ring-neutral-800">
                        Aplicación
                    </a> */}
                </div>
                <div id="imagen-proyecto" className="mx-auto my-4 flex w-full items-center justify-between sm:w-11/12 xl:my-8 xl:w-7/12 2xl:w-5/12">
                    <span className='aspect-[9/16] w-[100px] sm:w-[120px] md:w-[160px]'>
                        <PhoneMockup>
                            <img src={proyecto.imagen_movil} alt="mockup" style={{ width: '100%' }} />
                        </PhoneMockup>
                    </span>
                    <span className='w-[300px] sm:w-[400px] md:w-[500px]'>
                        <LaptopMockup>
                            <img src={proyecto.imagen_pc} alt="mockup" style={{ height: '100%' }} />
                        </LaptopMockup>
                    </span>
                </div>
                <div className='mx-auto flex items-center gap-2'>
                    {proyecto.skills.map(s => (
                        <Chip
                            key={s.id}
                            color={s.color}
                            fondo={s.fondo}
                            text={s.label}
                            img={s.img}
                            imgAlt={s.imgAlt}
                            hideLabel
                        />
                    ))}
                </div>
                <ul className='my-8 ml-4 flex list-outside list-disc flex-col gap-4 text-neutral-800 dark:text-neutral-400'>
                    {proyecto.caracteristicas.map(c => (
                        <li>{c}</li>
                    ))}
                </ul>
            </div>
            <ScrollRestoration />
        </section>
    )
}
