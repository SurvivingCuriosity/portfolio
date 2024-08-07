import { TEMA } from "@components/Inicio/context/AppContext";
import { useAppContext } from "@components/Inicio/context/useAppContext";
import { AnimatedGradientText, Chip, FlexRow } from "@components/ui";
import { ExperienciasLaborales, getCadenaFechas } from "@db/ExperienciasLaborales";
import company_img from '@img/icons/company_logo.svg';
import location_img from '@img/icons/location_logo.svg';

export const Experiencia = () => {

    const { tema } = useAppContext()
    

    return (
        <>
            <AnimatedGradientText
                text="Work experience"
                headingOrder="h1"
                fontSize="clamp(2rem, 2.5vw, 3rem)"
                className="mb-2 whitespace-nowrap text-center tracking-tighter xl:mb-10"
            />

            <ol className="relative mx-auto border-s border-neutral-400 xl:w-10/12 2xl:w-8/12 dark:border-amber-400">
                {ExperienciasLaborales.map((exp, index) => (
                    <li key={index} className="mb-6 ms-4 xl:mb-12">
                        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-neutral-400 bg-neutral-200 dark:border-amber-400 dark:bg-neutral-800"></div>
                        <time style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.33rem)' }} className="mb-1 font-normal leading-none text-neutral-800 dark:text-neutral-200">{getCadenaFechas(exp.fechaInicio, exp.fechaFin)}</time>

                        <div style={{ padding: 'clamp(0.5rem, 2vw, 1.5rem)', gap: 'clamp(0.5rem, 2vw, 1.5rem)' }} className="flex flex-col rounded-lg bg-neutral-100 shadow-lg dark:bg-neutral-800">
                            <div className="mb-2 flex items-center gap-2">

                                <img src={exp.logoEmpresa} className='size-14 rounded-xl md:size-16 2xl:size-20' alt={`Logo ${exp.nombreEmpresa}`}></img>
                                <div style={{ gap: 'clamp(0.1rem, 0.4vw, 2rem)' }} className='flex flex-col'>

                                    <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }} className='font-bold text-neutral-600 dark:text-neutral-200'>{exp.nombrePuesto}</p>

                                    <FlexRow className='items-center gap-1'>
                                        <img src={company_img} className='size-5 rounded-xl' alt={`Logo ${exp.nombreEmpresa}`}></img>
                                        <p style={{ fontSize: 'clamp(0.8em, 2.5vw, 1.25em)' }} className='text-neutral-600 dark:text-neutral-400'>{exp.nombreEmpresa}</p>
                                    </FlexRow>

                                    <FlexRow className='items-center gap-1'>
                                        <img src={location_img} className='size-5 rounded-xl' alt={`Logo ${exp.nombreEmpresa}`}></img>
                                        <p style={{ fontSize: 'clamp(0.8em, 2.5vw, 1.25em)' }} className='text-neutral-600 dark:text-neutral-400'>{exp.lugar}</p>
                                    </FlexRow>
                                </div>
                            </div>


                            <div className='mx-auto my-4 flex w-full flex-wrap items-center justify-start gap-2'>
                                {exp.aptitudes?.map(s => (
                                    <Chip
                                        key={s.id}
                                        color={tema === TEMA.dark ? s.color : s.colorOscuro}
                                        fondo={s.fondo}
                                        text={s.label}
                                        img={s.img}
                                        imgAlt={s.imgAlt}
                                    />
                                ))}
                            </div>


                            <ul className="flex flex-col gap-4 text-neutral-800 dark:text-neutral-400">
                                {exp.descripcion.map((descripcion, index) => (
                                    <li key={'Desc' + exp.nombreEmpresa + index} className="text-pretty text-sm md:text-base">{descripcion}</li>
                                ))}
                            </ul>

                        </div>

                        {/* <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" /> */}

                        <svg className="ms-2 h-3 w-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        </svg>
                    </li>
                ))}
            </ol>
        </>
    );
};
