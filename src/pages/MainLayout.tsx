import { Box, Footer, TopNav } from "@components/ui"
import { Outlet } from "react-router-dom"
import { ScrollRestoration } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div
      className="flex flex-col"
      style={{
        backgroundColor: 'rgb(16, 16, 16)',
        backgroundImage: 'radial-gradient(at 50.93% 47.07%, rgb(28, 28, 28) 0, transparent 80%)'
      }}
      >
      <TopNav />
      <main className="relative min-h-dvh py-2 md:py-12 lg:py-16 xl:py-24">
        <Box>
          <Outlet />
        </Box>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
