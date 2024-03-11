import { useState, useEffect } from 'react';
import github_img from '@img/skills/github-logo.svg';
import linkedin_img from '@img/skills/linkedin-logo.svg';
import { Link } from 'react-router-dom';
import { Box } from './Box';

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
                <div className='mx-auto flex flex-row items-center justify-between border-b border-neutral-400 p-2 text-white'>

                    <div className='z-20 flex gap-2'>
                        <a href='https://github.com/SurvivingCuriosity'>
                            <img className='size-7' src={github_img} alt='Logo Github'></img>
                        </a>
                        <a href='https://www.linkedin.com/in/ferrodest/'>
                            <img className='size-7' src={linkedin_img} alt='Logo Linkedin'></img>
                        </a>
                    </div>

                    <button onClick={toggleMenu} className="z-20 flex size-6 flex-col justify-center gap-2 xl:hidden">
                        <span className={`${isOpen ? 'rotate-[45deg] scale-[120%]' : 'rotate-0'} h-0.5 w-full rounded-lg bg-white transition-all duration-200 origin-top-left`}></span>
                        <span className={`${isOpen ? 'opacity-0' : 'opacity-1'} h-0.5 w-full rounded-lg bg-white transition-all duration-200 origin-bottom-left`}></span>
                        <span className={`${isOpen ? '-rotate-[45deg] scale-[120%]' : 'rotate-0'} h-0.5 w-full rounded-lg bg-white transition-all duration-200 origin-bottom-left`}></span>
                    </button>

                    <ul className='hidden xl:flex xl:flex-row xl:gap-6'>
                        <li><Link className='rounded-md p-2 transition-all duration-200 hover:bg-neutral-800' to='/'>Inicio</Link></li>
                        <li><Link className='rounded-md p-2 transition-all duration-200 hover:bg-neutral-800' to='/proyectos'>Proyectos</Link></li>
                        <li><Link className='rounded-md p-2 transition-all duration-200 hover:bg-neutral-800' to='/experiencia'>Experiencia</Link></li>
                        <li><Link className='rounded-md p-2 transition-all duration-200 hover:bg-neutral-800' to='#'>Contacto</Link></li>
                    </ul>

                    <div className={`block xl:hidden fixed top-0 z-10 h-dvh w-screen bg-black/90 backdrop-blur-[2px] ${isOpen ? 'left-0' : 'left-full'} transition-all duration-200 pt-20 px-7`}>
                            <ul className='border'>
                                <li onClick={() => { setIsOpen(false) }}><Link to='/'>Inicio</Link></li>
                                <li onClick={() => { setIsOpen(false) }}><Link to='/proyectos'>Proyectos</Link></li>
                                <li onClick={() => { setIsOpen(false) }}><Link to='/experiencia'>Experiencia</Link></li>
                                <li onClick={() => { setIsOpen(false) }}><Link to='#'>Contacto</Link></li>
                            </ul>
                    </div>

                </div>
            </Box>
        </div>
    );
};
