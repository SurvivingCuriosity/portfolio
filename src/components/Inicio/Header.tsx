import { Heading } from './Heading'
import { ListaAptitudes } from './ListaAptitudes'
import { SkillsCarousel } from './SkillsCarousel'
import { AnimatedGradientText } from '@components/ui'
import { ButtonScrollTo } from '@components/ui/ButtonScrollTo'

export const Header = () => {


    return (
        <header className="flex items-start justify-center px-2 md:px-0">
            <div className='flex flex-col items-center overflow-hidden'>

                <div className="flex flex-col space-y-6 2xl:flex-row 2xl:space-x-4 2xl:space-y-0">
                    <div className="flex animate-fade-in-top flex-col justify-between 2xl:w-2/3">
                        <Heading />
                        <p className="my-5 text-balance text-base text-neutral-900 2xl:my-0 dark:text-neutral-400">Más de 2 años de experiencia en el desarrollo de aplicaciones con <AnimatedGradientText text='React' headingOrder='span' /></p>
                    </div>



                    <ListaAptitudes />


                </div>


                <div id={'skills-carousel'} style={{ animationDelay: '0.8s' }} className="mt-8 inline-flex w-full animate-fade-in-top flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] md:w-10/12 2xl:mt-20">
                    <SkillsCarousel />
                </div>

                <div className="mt-4 lg:mt-20">
                    <ButtonScrollTo path='#inicio-experiencia' text='Experiencia laboral'/>
                </div>
            </div>

        </header>
    )
}
