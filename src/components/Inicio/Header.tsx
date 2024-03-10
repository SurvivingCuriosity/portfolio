import { Box } from '@components/ui'
import { Heading } from './Heading'
import { ListaAptitudes } from './ListaAptitudes'
import { SkillsCarousel } from './SkillsCarousel'

export const Header = () => {
    return (
        <header className="flex items-start justify-center pb-12">
            <div className='flex flex-col items-center overflow-hidden pt-16 2xl:pt-32'>
                <Box>
                    <div className="flex flex-col space-y-6 2xl:flex-row 2xl:space-x-4 2xl:space-y-0">
                        <div className="flex animate-fade-in-top flex-col justify-between 2xl:w-2/3">
                            <Heading />
                            <p className="my-6 text-balance text-lg text-neutral-400 2xl:my-0">Más de 2 años de experiencia en el desarrollo de aplicaciones con <span className="animate-text bg-gradient-to-r from-yellow-400 via-orange-600 to-yellow-400 bg-clip-text font-bold leading-snug text-transparent">React</span></p>
                        </div>

                        <ListaAptitudes />

                    </div>
                </Box>

                <div style={{ animationDelay: '1.2s' }} className="mt-8 inline-flex w-full animate-fade-in-top flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] md:w-1/2 2xl:mt-20">
                    <SkillsCarousel />
                </div>

                <div className="p-2">
                    <a href={'#inicio-main-content'} className="mt-4 block rotate-45 border-b border-r p-2"></a>
                </div>
            </div>

        </header>
    )
}
