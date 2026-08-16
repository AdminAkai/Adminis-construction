import { FC, PropsWithChildren } from 'react'

import styles from './Section.module.css'

const Section: FC<PropsWithChildren> = ({ children }) => (
  <section className={styles.section}>{children}</section>
)

export default Section
