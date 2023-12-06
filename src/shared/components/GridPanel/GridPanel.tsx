import { FC, memo, PropsWithChildren } from 'react'

import { variants } from './lib'
import { GridPanelBox } from './styledComponents'

const GridPanel: FC<PropsWithChildren> = ({ children }) => (
  <GridPanelBox variants={variants}>{children}</GridPanelBox>
)

const memoizedGridPanel = memo(GridPanel)

export default memoizedGridPanel
