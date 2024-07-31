import { AnimatedGradientText } from "@components/ui"
import { Proyectos as ListaProyectos } from "@db/Proyectos"
import { Link, useNavigate } from "react-router-dom"
export const Proyectos = () => {

    const navigate = useNavigate()

    return (
        <>
            <AnimatedGradientText
                text="Projects"
                headingOrder="h1"
                fontSize="clamp(2.5rem, 2.5vw, 4rem)"
                className="mb-2 whitespace-nowrap text-center tracking-tighter xl:mb-10"
            />
            <ol className="mx-auto grid grid-cols-1 justify-items-center gap-4 border-neutral-400 lg:grid-cols-2 xl:w-10/12 xl:gap-8 2xl:w-8/12 2xl:grid-cols-3">
                {ListaProyectos.map((proyecto) => (


                    <div key={proyecto.path} onClick={() => navigate(`/proyectos/${proyecto.path}`)} className="relative max-w-lg origin-center cursor-pointer rounded-lg border border-neutral-200 bg-white shadow duration-200 hover:scale-105 dark:border-neutral-700 dark:bg-neutral-800">

                        <img className="rounded-t-lg" src={proyecto.imagen_pc} alt="Imagen proyecto" />
                        <div className="p-5">
                            <span className="relative mb-2 flex items-center gap-2">
                                <img className="size-8 -rotate-12" src={proyecto.icono} alt="Icono proyecto" /> 
                                <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{proyecto.nombre}</h2>
                            </span>

                            <p className="mb-3 font-normal text-neutral-700 dark:text-neutral-400">{proyecto.descripcionCorta}</p>
                            <Link to={`/proyectos/${proyecto.path}`} className="absolute bottom-1 right-1 text-xs text-neutral-700 dark:text-neutral-400">
                                More details
                            </Link>
                        </div>
                    </div>

                ))}
            </ol>
        </>
    )
}
