import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Experiencia, GoBackLayout, Inicio, MainLayout, Proyectos } from './pages';


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
        </Route>
      </Route>


    </>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);