import { Link } from "react-router-dom"
import { Box } from "./Box"
import { ThemeSwitcher } from "./ThemeSwitcher"

export const Footer = () => {
  return (
    <div className="bg-neutral-300/70 p-4 dark:bg-neutral-900/70">
      <Box>
        <>
          <p className="text-center text-xs text-neutral-900 dark:text-neutral-200">Designed and developed by <Link to='https://github.com/SurvivingCuriosity' target="_blank" className='text-neutral-600 underline underline-offset-2 dark:text-neutral-200'>Fernando Rodríguez</Link></p>
          <ThemeSwitcher />
        </>
      </Box>
    </div>
  )
}
