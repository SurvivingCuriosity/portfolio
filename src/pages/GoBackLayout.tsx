import { Link, Outlet } from "react-router-dom"
import back_arrow from '@img/icons/arrow_back.svg'


export const GoBackLayout = () => {
  return (
    <>
      <Link to={'/'} className="absolute top-2 mb-2 flex items-center justify-start">
        <img src={back_arrow} alt="Icono flecha atrás" className="size-8"></img>
        <p className="text-neutral-200">Atrás</p>
      </Link>
      <div className="mt-8 md:mt-0">
        <Outlet />
      </div>
    </>
  )
}
