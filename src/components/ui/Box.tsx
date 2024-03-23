export interface BoxProps {
  children: JSX.Element
}

export const Box = ({ children }: BoxProps) => {
  return (
    <div className='mx-auto md:w-10/12 lg:w-9/12'>{children}</div>
  )
}
