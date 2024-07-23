import { FC, PropsWithChildren } from 'react'

import { MainGrid } from './styledComponents'

type GridProps = {
  panels: number
}

const Grid: FC<PropsWithChildren<GridProps>> = ({ children, panels }) => {
  return (
    <MainGrid
      $gridPanels={Math.ceil(Math.sqrt(panels))}
      initial='initial'
      animate='animate'
      transition={{ staggerChildren: 0.3 }}
    >
      {children}
    </MainGrid>
  )
}

export default Grid
