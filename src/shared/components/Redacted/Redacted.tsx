import { FC, PropsWithChildren } from 'react'

import styles from './Redacted.module.css'

type RedactedProps = {
  color?: string
}

const Redacted: FC<PropsWithChildren<RedactedProps>> = ({
  color = 'black',
  children,
}) => (
  <span style={{ color, backgroundColor: color }} className={styles.redacted}>
    {children}
  </span>
)

export default Redacted
