import { FC, PropsWithChildren } from 'react'

import styles from './PageMark.module.css'

const PageMark: FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <div className={styles.mark} {...rest}>
      {children}
    </div>
  )
}

export default PageMark
