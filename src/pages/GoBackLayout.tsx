import { Link, Outlet } from "react-router-dom"

export const GoBackLayout = () => {
  return (
    <div>
      <Link to={'/'} className="text-neutral-200">Go back</Link>
      <Outlet />
    </div>
  )
}
