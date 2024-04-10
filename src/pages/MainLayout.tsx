import { Box, Footer, TopNav } from "@components/ui"
import { TEMA, useAppContext } from "@components/Inicio/context/AppContext";
import { Outlet } from "react-router-dom"
import { ScrollRestoration } from "react-router-dom";

export const MainLayout = () => {

  const { tema } = useAppContext()

  return (
    <div
      className="flex flex-col"
      style={
        tema === TEMA.dark
          ? {
            backgroundColor: 'rgb(16, 16, 16)',
            backgroundImage: 'linear-gradient(to right, rgb(16, 16, 16), rgb(24, 24, 24), rgb(16, 16, 16))'
          }
          : {
            backgroundColor: 'rgb(250, 250, 250)',
            backgroundImage: 'linear-gradient(to right, rgb(250, 250, 250), rgb(255, 255 ,255), rgb(250, 250, 250))'
          }}
    >
      <TopNav />
      <main className="relative py-8 md:py-12 lg:py-16 xl:py-24 xl:pt-40">
        <Box>
          <Outlet />
        </Box>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
