import { Link, Outlet, ScrollRestoration } from "react-router-dom"
import back_arrow from '@img/icons/arrow_back.svg'


export const GoBackLayout = () => {
  return (
    <>
      <Link to={'/'} className="absolute top-4 mb-2 flex items-center justify-start rounded-lg border border-neutral-500 px-2 pr-4">
        <img src={back_arrow} alt="Icono flecha atrás" className="size-8"></img>
        <p className="font-bold text-neutral-500">Atrás</p>
      </Link>
      <div className="mt-8 md:mt-0">
        <Outlet />
        <ScrollRestoration />
      </div>
    </>
  )
}
