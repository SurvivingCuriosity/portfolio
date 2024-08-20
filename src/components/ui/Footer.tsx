import { Link } from "react-router-dom"
import { Box } from "./Box"
import { ThemeSwitcher } from "./ThemeSwitcher"

export const Footer = () => {
  return (
    <footer className="z-50 bg-neutral-300 p-4 dark:bg-neutral-900">
      <Box>
        <div className="flex justify-between gap-4">
          <p className="text-center text-sm text-neutral-900 dark:text-neutral-200">Designed and developed by <Link to='https://github.com/SurvivingCuriosity' target="_blank" className='block text-neutral-600 underline underline-offset-2 dark:text-neutral-200'>Fernando Rodríguez</Link></p>
          <ThemeSwitcher />
        </div>
      </Box>
    </footer>
  )
}
