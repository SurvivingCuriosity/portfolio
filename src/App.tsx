import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useEffect } from 'react';
import { DetalleProyecto, Experiencia, GoBackLayout, Inicio, MainLayout, Proyectos } from './pages';
import { TEMA, useAppContext } from '@components/Inicio/context/AppContext';

export const App = () => {

    const { tema } = useAppContext()

    useEffect(() => {
        const html = document.querySelector('html');
        if (html !== null) {
            if (tema === TEMA.dark) {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }
        }
    }, [tema])

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Inicio />} />

                    <Route path="/experiencia" element={<GoBackLayout />}>
                        <Route path="/experiencia" element={<Experiencia />} />
                    </Route>

                    <Route path="/proyectos" element={<GoBackLayout />}>
                        <Route path="/proyectos" element={<Proyectos />} />
                        <Route path="/proyectos/:idProyecto" element={<DetalleProyecto />} />
                    </Route>
                </Route>
            </>
        )
    );

    return (
        <RouterProvider router={router} />
    )
}