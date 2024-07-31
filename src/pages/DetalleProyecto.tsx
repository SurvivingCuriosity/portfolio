import { useEffect, useMemo } from 'react'
import { LaptopMockup } from '@components/mockups/LaptopMockup'
import { PhoneMockup } from '@components/mockups/PhoneMockup'
import { Chip } from '@components/ui'
import { Proyectos } from '@db/Proyectos'
import { Navigate, ScrollRestoration, useParams } from 'react-router-dom'
import { GithubIcon } from '@components/icons'
import { TEMA } from '@components/Inicio/context/AppContext'
import { useAppContext } from '@components/Inicio/context/useAppContext'

export const DetalleProyecto = () => {

    const { tema } = useAppContext()
    const { idProyecto } = useParams()
    const proyecto = Proyectos.find(p => p.path === idProyecto)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const mappedSkills = useMemo(() => {
        return proyecto?.skills.map(skill => (
            {
                ...skill,
                color: tema === TEMA.dark ? skill.color : skill.colorOscuro
            }
        ))
    }, [tema, proyecto])

    if (proyecto === undefined) {
        return <Navigate to='/' replace />
    }





    return (
        <section key={proyecto.nombre} className="relative md:min-h-max">

            <img src={proyecto.icono} alt="Icono del proyecto" id="imagen-fondo-detalle-proyecto" className='pointer-events-none fixed -right-[120px] -top-10 z-0 size-[400px] rotate-45 opacity-10 blur-[6px] xl:left-[120px] xl:size-[600px]' />

            <div className="mb-2">
                <span className='flex items-center gap-2'>
                    <h3 className="z-50 text-4xl font-extrabold leading-none tracking-tight text-neutral-700 md:text-5xl xl:text-6xl dark:text-white">{proyecto.nombre}</h3>
                    <img src={proyecto.icono} alt="Icono del proyecto" className='size-10 xl:size-12' />
                </span>
            </div>

            <div className='flex flex-col xl:flex-row-reverse xl:items-start xl:gap-4'>


                <div className='xl:w-7/12'>

                    <div className="mx-auto my-4 flex w-full items-center justify-center px-4 sm:my-8 xl:my-0 xl:justify-end xl:px-0">
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
                    <span className='my-4 flex items-center gap-4 xl:justify-end'>
                        <a href={proyecto.urlGithub} target='_blank' className="proyectos-link"> <GithubIcon /> </a>
                        <a href={proyecto.urlProyecto} target='_blank' className="proyectos-link text-sm underline underline-offset-2 dark:text-neutral-400"> {proyecto.urlProyecto.slice(0, proyecto.urlProyecto.length - 1)} </a>
                    </span>
                </div>





                <div className='xl:w-5/12'>
                    <div className='mx-auto my-4 flex w-full flex-wrap items-center justify-start gap-2'>
                        {mappedSkills?.map(s => (
                            <Chip
                                key={s.id}
                                color={s.color}
                                fondo={s.fondo}
                                text={s.label}
                                img={s.img}
                                imgAlt={s.imgAlt}
                            />
                        ))}
                    </div>

                    <div className='my-4 xl:my-8'>
                        {proyecto.descripcionLarga.map((descripcion, index) => (
                            <p key={'Desc' + proyecto.nombre + index} className="mb-3 text-pretty text-sm text-neutral-800 first-letter:text-xl md:text-base lg:mb-4 2xl:mb-6 dark:text-neutral-300">{descripcion}</p>
                        ))}
                    </div>

                    <div className=''>
                        <p className='mb-3 text-2xl font-bold text-neutral-800 md:text-3xl dark:text-neutral-500'>Technical Specifications:</p>
                        <ul className='ml-4 flex list-disc flex-col gap-4 text-neutral-800 dark:text-neutral-400'>
                            {proyecto.caracteristicas.map((c, index) => (
                                <li key={'Car' + proyecto.nombre + index} className='text-pretty text-sm text-neutral-800 md:text-base dark:text-neutral-300'>{c}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>




            <ScrollRestoration />

        </section>
    )
}
