import { FC, useMemo } from 'react'

import TickerLink from '../TickerLink'

import styles from './TickerItem.module.css'

export type TickerItemProps = {
  bracket: string
  text: string
  link?: string
}

const TickerItem: FC<TickerItemProps> = ({ bracket, text, link }) => {
  const content = useMemo(() => {
    if (link)
      return (
        <TickerLink to={link} ariaLabel={text}>
          {text}
        </TickerLink>
      )
    return text
  }, [link])

  return (
    <div className={styles['ticker-item']}>
      <span className={styles.bracket}>{bracket}</span>
      {content}
      <span className={styles.separator}>/</span>
    </div>
  )
}

export default TickerItem
