import { ExperienciasLaborales } from '@db/ExperienciasLaborales'
import { SectionInicio } from './SectionInicio'
import { FlexRow } from '@components/ui'

import location_img from '@img/icons/location_logo.svg'
import company_img from '@img/icons/company_logo.svg'
import { Link } from 'react-router-dom'
import { ButtonScrollTo } from '@components/ui/ButtonScrollTo'

export const ExperienciaInicio = () => {
    return (
        <SectionInicio titulo='Experiencia laboral'>
            <div className='min-h-dvh'>

                <ul style={{ gap: 'clamp(0.5em, 4vw, 1em)' }} className='flex flex-col'>
                    {ExperienciasLaborales.map(exp => (
                        <li
                            key={exp.fechaInicio.getTime()}
                            style={{ padding: 'clamp(0.5rem, 2vw, 1.5rem)', gap: 'clamp(0.5rem, 2vw, 1.5rem)' }}
                            className='relative flex flex-row items-center rounded-md bg-neutral-100 p-2 px-4 text-sm text-neutral-700 shadow dark:bg-neutral-800 dark:text-neutral-300 dark:shadow-none'
                        >

                            {!exp.fechaFin &&
                                <div className='absolute -left-1 -top-2 block -rotate-3 animate-text rounded-md bg-neutral-600 bg-gradient-to-r from-[#01BE7C] via-[#76ffd6] to-[#01BE7C] px-2 py-0.5 text-xs font-bold text-neutral-900 xl:text-base'>
                                    Actual
                                </div>
                            }
                            <img src={exp.logoEmpresa} className='size-12 rounded-xl xl:size-16 2xl:size-20' alt={`Logo ${exp.nombreEmpresa}`}></img>
                            <div style={{ gap: 'clamp(0.1rem, 0.4vw, 2rem)' }} className='mb-auto flex flex-col'>

                                <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }} className='font-bold'>{exp.nombrePuesto}</p>

                                <FlexRow className='items-center gap-1'>
                                    <img src={company_img} className='size-5 rounded-xl' alt={`Icono edificio`} style={{ fill: 'red' }}></img>
                                    <p style={{ fontSize: 'clamp(0.8em, 2.5vw, 1.25em)' }} className='text-neutral-600 dark:text-neutral-400'>{exp.nombreEmpresa}</p>
                                </FlexRow>

                                <FlexRow className='items-center gap-1'>
                                    <img src={location_img} className='size-5 rounded-xl' alt={`Icono ubicación`}></img>
                                    <p style={{ fontSize: 'clamp(0.8em, 2.5vw, 1.25em)' }} className='text-neutral-600 dark:text-neutral-400'>{exp.lugar}</p>
                                </FlexRow>
                            </div>
                        </li>

                    ))}
                </ul>
                <Link to='experiencia' className={`float-end p-4 text-sky-600 underline underline-offset-2 dark:text-amber-600`}>Más detalles</Link>
                
                <div className='mx-auto mt-20 flex justify-center'>
                    <ButtonScrollTo
                        path='#inicio-proyectos'
                        text='Mis proyectos'
                    />
                </div>
            </div>
        </SectionInicio>
    )
}
