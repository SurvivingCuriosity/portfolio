import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box } from './Box';
import { FlexRow } from './FlexRow';
import { GithubIcon, LinkedinIcon } from '@components/icons';
import { LanguagePicker } from './LanguagePicker';
import { ThemeSwitcher } from './ThemeSwitcher';

export const TopNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

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
                <div className='mx-auto flex flex-row items-center justify-between border-b border-neutral-400 py-2 text-neutral-900 dark:text-neutral-200'>

                    <div className='z-20 flex gap-2'>
                        <a href='https://github.com/SurvivingCuriosity'>
                            <GithubIcon />
                        </a>
                        <a href='https://www.linkedin.com/in/ferrodest/'>
                            <LinkedinIcon />
                        </a>
                    </div>

                    <button aria-label='Botón abrir menú lateral' onClick={toggleMenu} className="z-20 flex size-6 flex-col justify-center gap-2 lg:hidden">
                        <span className={`${isOpen ? 'rotate-[45deg] scale-[120%]' : 'rotate-0'} h-0.5 w-full rounded-lg dark:bg-neutral-200 transition-all duration-200 origin-top-left bg-neutral-900`}></span>
                        <span className={`${isOpen ? 'opacity-0' : 'opacity-1'} h-0.5 w-full rounded-lg dark:bg-neutral-200 transition-all duration-200 origin-bottom-left bg-neutral-900`}></span>
                        <span className={`${isOpen ? '-rotate-[45deg] scale-[120%]' : 'rotate-0'} h-0.5 w-full rounded-lg dark:bg-neutral-200 transition-all duration-200 origin-bottom-left bg-neutral-900`}></span>
                    </button>

                    <ul className='hidden lg:flex lg:flex-row lg:gap-6'>
                        <li><Link className='rounded-md p-2 transition-all duration-200 hover:bg-neutral-300 dark:hover:bg-neutral-800' to='/'>Inicio</Link></li>
                        <li><Link className='rounded-md p-2 transition-all duration-200 hover:bg-neutral-300 dark:hover:bg-neutral-800' to='/proyectos'>Proyectos</Link></li>
                        <li><Link className='rounded-md p-2 transition-all duration-200 hover:bg-neutral-300 dark:hover:bg-neutral-800' to='/experiencia'>Experiencia</Link></li>
                        <li><Link className='rounded-md p-2 transition-all duration-200 hover:bg-neutral-300 dark:hover:bg-neutral-800' to='#'>Contacto</Link></li>
                    </ul>


                    <div className={`flex flex-col justify-between lg:hidden fixed top-0 z-10 h-dvh w-screen dark:bg-black/90 bg-neutral-100/90 backdrop-blur-[2px] ${isOpen ? 'left-0' : 'left-full'} transition-all duration-200 pt-20 pb-4`}>

                        <ul className={`w-full px-7 *:mb-8 *:border-b *:border-neutral-800 *:text-2xl *:dark:border-neutral-200`}>
                            <li onClick={() => { setIsOpen(false) }}><Link to='/'>Inicio</Link></li>
                            <li onClick={() => { setIsOpen(false) }}><Link to='/proyectos'>Proyectos</Link></li>
                            <li onClick={() => { setIsOpen(false) }}><Link to='/experiencia'>Experiencia</Link></li>
                            <li onClick={() => { setIsOpen(false) }}><Link to='#'>Contacto</Link></li>
                        </ul>

                        <FlexRow justifyBetween className='px-7'>
                            <LanguagePicker />
                            <ThemeSwitcher />
                        </FlexRow>
                    </div>
                </div>
            </Box>
        </div>
    );
};
