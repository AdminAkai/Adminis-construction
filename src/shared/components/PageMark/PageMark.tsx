import { FC, PropsWithChildren } from 'react'

type PageMarkProps = {
  xPosition: string
  yPosition: string
}

const PageMark: FC<PropsWithChildren<PageMarkProps>> = ({
  xPosition,
  yPosition,
}) => {
  console.log(xPosition)
  console.log(yPosition)

  return <div></div>
}

export default PageMark
