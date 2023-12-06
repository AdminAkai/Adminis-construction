import { FC, memo, PropsWithChildren } from 'react'

import { GridPanelBox } from './styledComponents'
import { Variants } from 'framer-motion'

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
}

const GridPanel: FC<PropsWithChildren> = ({ children }) => (
  <GridPanelBox variants={variants}>{children}</GridPanelBox>
)

const memoizedGridPanel = memo(GridPanel)

export default memoizedGridPanel
