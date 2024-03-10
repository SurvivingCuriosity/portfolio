export interface BoxProps {
  children: JSX.Element
}

export const Box = ({ children }: BoxProps) => {
  return (
    <div className='mx-auto px-3 md:w-10/12 lg:w-9/12 xl:w-8/12'>{children}</div>
  )
}
