import back_arrow from '@img/icons/arrow_back.svg'
import { Outlet, ScrollRestoration } from "react-router-dom"


export const GoBackLayout = () => {

  const handleNavigateBack = () => {
    window.history.back()
  }

  return (
    <>
      <button onClick={handleNavigateBack} className="absolute top-20 mb-2 flex items-center justify-start rounded-lg border border-neutral-600 px-2 pr-4 dark:border-neutral-400">
        <img src={back_arrow} alt="Icono flecha atrás" className="size-8"></img>
        <p className="font-bold text-neutral-600 dark:text-neutral-400">Go back</p>
      </button>
      <div className="mt-20 xl:mt-0">
        <Outlet />
        <ScrollRestoration />
      </div>
    </>
  )
}
