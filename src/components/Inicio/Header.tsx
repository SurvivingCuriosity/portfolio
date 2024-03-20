import { useNavigate } from 'react-router-dom'
import { Heading } from './Heading'
import { ListaAptitudes } from './ListaAptitudes'
import { SkillsCarousel } from './SkillsCarousel'
import { AnimatedGradientText } from '@components/ui'

export const Header = () => {
    const navigate = useNavigate()

    const handleArrowClick = () => {
        navigate('#inicio-main-content')
    }

    return (
        <header className="flex items-start justify-center">
            <div className='flex flex-col items-center overflow-hidden'>

                <div className="flex flex-col space-y-6 2xl:flex-row 2xl:space-x-4 2xl:space-y-0">
                    <div id={'heading'} className="flex animate-fade-in-top flex-col justify-between 2xl:w-2/3">
                        <Heading />
                        <p className="my-6 text-balance text-lg text-neutral-900 2xl:my-0 dark:text-neutral-400">Más de 2 años de experiencia en el desarrollo de aplicaciones con <AnimatedGradientText text='React' headingOrder='span' /></p>
                    </div>



                    <ListaAptitudes />


                </div>


                <div id={'skills-carousel'} style={{ animationDelay: '0.8s' }} className="mt-8 inline-flex w-full animate-fade-in-top flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] md:w-10/12 2xl:mt-20">
                    <SkillsCarousel />
                </div>

                <div className="mt-4 md:hidden">
                    <button aria-label="Desplazarse hasta experiencia" onClick={handleArrowClick} className='flex items-center justify-center rounded-full p-2 hover:bg-neutral-700'>
                        <span className='m-1 block -translate-y-1 rotate-45 border-b border-r p-2'></span>
                    </button>
                </div>
            </div>

        </header>
    )
}
