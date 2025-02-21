import { FC, PropsWithChildren } from 'react'

import styles from './gridPanel.module.css'

const GridPanel: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles['grid-panel-box']}>{children}</div>
)

export default GridPanel
