import { ExperienciaInicio, Header, ObjetivosInicio, ProyectosInicio, ScrollTopBtn } from "@components/Inicio"

export const Inicio = () => {

    return (
        <>
            <ScrollTopBtn />
            <Header />

            <main id='inicio-main-content' className="pb-8 pt-4">
                <section id='inicio-experiencia'>
                    <ExperienciaInicio />
                </section>
                <section id='inicio-proyectos'>
                    <ProyectosInicio />
                </section>
                <section id='inicio-objetivos'>
                    <ObjetivosInicio />
                </section>
            </main>


        </>
    )
}
