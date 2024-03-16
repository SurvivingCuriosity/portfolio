import { ContactoInicio, ExperienciaInicio, Header, ObjetivosInicio, ProyectosInicio } from "@components/Inicio"

export const Inicio = () => {

    return (
        <div>
            <Header />

            <main style={{animationDelay:'1s'}} id='inicio-main-content' className="animate-fade-in-top pb-8 pt-4">
                <section id='inicio-experiencia'>
                    <ExperienciaInicio />
                </section>
                <section id='inicio-proyectos'>
                    <ProyectosInicio />
                </section>
                <section id='inicio-objetivos'>
                    <ObjetivosInicio />
                </section>
                <section id='inicio-contacto'>
                    <ContactoInicio />
                </section>
            </main>


        </div>
    )
}
