import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './Redacted.module.css'

type RedactedProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  color?: string
}

const Redacted: FC<PropsWithChildren<RedactedProps>> = ({
  color = 'black',
  children,
  ...rest
}) => (
  <span
    style={{ color, backgroundColor: color }}
    className={styles.redacted}
    {...rest}
  >
    {children}
  </span>
)

export default Redacted
