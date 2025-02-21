import { FC, PropsWithChildren } from 'react'

import styles from './grid.module.css'

type GridProps = {
  panels: number
}

const Grid: FC<PropsWithChildren<GridProps>> = ({ children, panels }) => {
  const splitPanels = Math.ceil(Math.sqrt(panels))

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${splitPanels}, 1fr)`,
        gridTemplateRows: `repeat(${splitPanels / 3}, 1fr)`,
      }}
      className={styles['main-grid']}
    >
      {children}
    </div>
  )
}

export default Grid
