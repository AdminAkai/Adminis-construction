import { FC, PropsWithChildren } from 'react'

import styles from './panelDescription.module.css'

const PanelDescription: FC<PropsWithChildren> = ({ children }) => (
  <p className={styles['panel-description']} aria-label='Project Description'>
    {children}
  </p>
)

export default PanelDescription
