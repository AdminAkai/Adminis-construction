import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './PageMark.module.css'

type PageMarkProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  top?: string | number
  bottom?: string | number
  left?: string | number
  right?: string | number
}

const PageMark: FC<PropsWithChildren<PageMarkProps>> = ({
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  children,
  ...rest
}) => {
  return (
    <div style={{ top, bottom, left, right }} className={styles.mark} {...rest}>
      {children}
    </div>
  )
}

export default PageMark
