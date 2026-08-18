import { FC, useMemo } from 'react'

import TickerLink from '../TickerLink'

import styles from './TickerItem.module.css'
import useHackerScramble from 'src/shared/hooks/useHackerScramble'
import { useAppSelector } from 'src/shared/redux/store'
import { selectBroken } from 'src/shared/redux/settingsSlice/settingsSelectors'

export type TickerItemProps = {
  bracket: string
  text: string
  link?: string
}

const TickerItem: FC<TickerItemProps> = ({ bracket, text, link }) => {
  const broken = useAppSelector(selectBroken)

  const contentText = useHackerScramble({ initialWord: text, infinite: broken })

  const content = useMemo(() => {
    if (link)
      return (
        <TickerLink to={link} ariaLabel={text}>
          {contentText}
        </TickerLink>
      )
    return contentText
  }, [link, contentText, text])

  return (
    <div className={styles['ticker-item']}>
      <span className={styles.bracket}>{bracket}</span>
      {content}
      <span className={styles.separator}>/</span>
    </div>
  )
}

export default TickerItem
