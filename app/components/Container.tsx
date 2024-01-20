"use client"
interface ContainerProps{
    children:React.ReactNode;
}

const Container :React.FC<ContainerProps>= ({children}) => {
  return (
    <div className="w-full flex 
    flex-row items-center justify-between 
    px-1 md:px-2 lg:px-4">{children}</div>
  )
}

export default Container
