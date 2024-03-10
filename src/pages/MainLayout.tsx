import { Footer, TopNav } from "@components/ui"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <TopNav />
      <Outlet />
      <Footer />
    </div>
  )
}
