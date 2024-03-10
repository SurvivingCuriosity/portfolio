import { ContactoInicio, ExperienciaInicio, Header, ObjetivosInicio, ProyectosInicio } from "@components/Inicio"
import { Box } from "@components/ui"

export const Inicio = () => {

    return (
        <div
            style={{
                backgroundColor: 'rgb(16, 16, 16)',
                backgroundImage: 'radial-gradient(at 50.93% 47.07%, rgb(28, 28, 28) 0, transparent 80%)'
            }}
        >

            <Header />

            <Box>
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
                    <section id='inicio-contacto'>
                        <ContactoInicio />
                    </section>
                </main>
            </Box>

        </div>
    )
}
