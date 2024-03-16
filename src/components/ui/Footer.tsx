import { Box } from "./Box"
import { FlexRow } from "./FlexRow"
import { LanguagePicker } from "./LanguagePicker"
import { ThemeSwitcher } from "./ThemeSwitcher"

export const Footer = () => {
  return (
    <div className="bg-neutral-300 p-4 dark:bg-neutral-800">
      <Box>
        <>
          <p className="text-neutral-900 dark:text-neutral-200">Footer</p>
          <FlexRow justifyBetween className='px-7'>
            <LanguagePicker />
            <ThemeSwitcher />
          </FlexRow>
        </>
      </Box>
    </div>
  )
}
