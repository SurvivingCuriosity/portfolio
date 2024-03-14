import { useState, useEffect } from 'react';
import github_img from '@img/skills/github-logo.svg';
import linkedin_img from '@img/skills/linkedin-logo.svg';
import { Link } from 'react-router-dom';
import { Box } from './Box';
import spain_icon from '@img/icons/spain_flag.svg'
import uk_icon from '@img/icons/uk_flag.svg'
import moon_icon from '@img/icons/moon_icon.svg'
import sun_icon from '@img/icons/sun_icon.svg'

import { FlexRow } from './FlexRow';
import { IDIOMA, TEMA, useAppContext } from 'context/AppContext';

export const TopNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {idioma,tema, toggleTema, cambiarIdioma} = useAppContext()

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };

    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            <Box>
                <div className='mx-auto flex flex-row items-center justify-between border-b border-neutral-400 p-2 text-white'>

                    <div className='z-20 flex gap-2'>
                        <a href='https://github.com/SurvivingCuriosity'>
                            <img className='size-7' src={github_img} alt='Logo Github'></img>
                        </a>
                        <a href='https://www.linkedin.com/in/ferrodest/'>
                            <img className='size-7' src={linkedin_img} alt='Logo Linkedin'></img>
                        </a>
                    </div>

                    <button aria-label='Botón abrir menú lateral' onClick={toggleMenu} className="z-20 flex size-6 flex-col justify-center gap-2 lg:hidden">
                        <span className={`${isOpen ? 'rotate-[45deg] scale-[120%]' : 'rotate-0'} h-0.5 w-full rounded-lg bg-white transition-all duration-200 origin-top-left`}></span>
                        <span className={`${isOpen ? 'opacity-0' : 'opacity-1'} h-0.5 w-full rounded-lg bg-white transition-all duration-200 origin-bottom-left`}></span>
                        <span className={`${isOpen ? '-rotate-[45deg] scale-[120%]' : 'rotate-0'} h-0.5 w-full rounded-lg bg-white transition-all duration-200 origin-bottom-left`}></span>
                    </button>

                    <ul className='hidden lg:flex lg:flex-row lg:gap-6'>
                        <li><Link className='rounded-md p-2 transition-all duration-200 hover:bg-neutral-800' to='/'>Inicio</Link></li>
                        <li><Link className='rounded-md p-2 transition-all duration-200 hover:bg-neutral-800' to='/proyectos'>Proyectos</Link></li>
                        <li><Link className='rounded-md p-2 transition-all duration-200 hover:bg-neutral-800' to='/experiencia'>Experiencia</Link></li>
                        <li><Link className='rounded-md p-2 transition-all duration-200 hover:bg-neutral-800' to='#'>Contacto</Link></li>
                    </ul>


                    <div className={`flex flex-col justify-between lg:hidden fixed top-0 z-10 h-dvh w-screen bg-black/90 backdrop-blur-[2px] ${isOpen ? 'left-0' : 'left-full'} transition-all duration-200 pt-20 pb-4`}>

                        <ul className={`w-full px-7 *:mb-8 *:border-b *:text-2xl`}>
                            <li onClick={() => { setIsOpen(false) }}><Link to='/'>Inicio</Link></li>
                            <li onClick={() => { setIsOpen(false) }}><Link to='/proyectos'>Proyectos</Link></li>
                            <li onClick={() => { setIsOpen(false) }}><Link to='/experiencia'>Experiencia</Link></li>
                            <li onClick={() => { setIsOpen(false) }}><Link to='#'>Contacto</Link></li>
                        </ul>

                        <FlexRow justifyBetween className='px-7'>

                            <button onClick={()=>{cambiarIdioma(idioma === IDIOMA.es ? IDIOMA.en : IDIOMA.es)}} className='flex w-fit items-center gap-4 rounded-lg p-1 px-3 text-sm transition-colors duration-200 hover:bg-neutral-800/40'>

                                {idioma === IDIOMA.es
                                    ?
                                    <>
                                        <img src={uk_icon} className='size-10' alt='Bandera británica'></img>
                                    </>
                                    :
                                    <>
                                        <img src={spain_icon} className='size-10' alt='Bandera española'></img>
                                    </>
                                }
                            </button>

                            <button onClick={()=>{toggleTema()}} className='flex w-fit items-center gap-4 rounded-lg p-1 px-3 text-sm transition-colors duration-200 hover:bg-neutral-800/40'>

                                {tema === TEMA.light
                                    ?
                                    <>
                                        <img src={moon_icon} className='size-7' alt='Icono luna'></img>
                                    </>
                                    :
                                    <>
                                    <button>
                                        <img src={sun_icon} className='size-7' alt='Icono sol'></img>
                                    </button>
                                    </>
                                }
                            </button>

                        </FlexRow>
                    </div>
                </div>
            </Box>
        </div>
    );
};
