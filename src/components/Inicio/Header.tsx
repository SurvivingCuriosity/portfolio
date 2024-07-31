import { ButtonScrollTo } from '@components/ui/ButtonScrollTo'
import { Heading } from './Heading'
import { ListaAptitudes } from './ListaAptitudes'
import { SkillsCarousel } from './SkillsCarousel'

export const Header = () => {


    return (
        <header className="my-4 flex items-start justify-center px-2 md:px-0 lg:my-8">
            <div className='flex flex-col items-center overflow-hidden'>

                <div className="flex flex-col space-y-6 2xl:flex-row 2xl:space-x-4 2xl:space-y-0">
                    <div className="flex animate-fade-in-top flex-col justify-between 2xl:w-2/3">
                        <Heading />
                        <p className="my-5 text-balance text-base text-neutral-900 md:text-lg lg:text-xl 2xl:my-0 dark:text-neutral-400">Over 2 years of experience in developing applications with React</p>

                    </div>


                    <ListaAptitudes />
                </div>


                <div id={'skills-carousel'} style={{ animationDelay: '0.8s' }} className="mt-8 inline-flex w-full animate-fade-in-top flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] md:w-10/12 2xl:mt-20">
                    <SkillsCarousel />
                </div>

                <div className="mt-8 md:mt-12 lg:mt-20">
                    <ButtonScrollTo path='#inicio-experiencia' text='Work experience'/>
                </div>
            </div>

        </header>
    )
}
