import { FC, useMemo } from 'react'

import styles from './Ticker.module.css'
import TickerItem, { TickerItemProps } from './TickerItem'
import { useAppSelector } from 'src/shared/redux/store'
import { selectBroken } from 'src/shared/redux/settingsSlice/settingsSelectors'

const tickerItems: Omit<TickerItemProps, 'bracket' | 'lang'>[] = [
  {
    text: 'ADMINIS LLC',
    link: '/',
    nav: true,
  },
  {
    text: 'GITHUB',
    link: 'https://github.com/AdminAkai/Adminis',
  },
  {
    text: 'LINKEDIN',
    link: 'https://www.linkedin.com/in/josh-adrian-trinidad/',
  },
  {
    text: 'STACK OVERFLOW',
    link: 'https://stackoverflow.com/users/21342972/adminakai',
  },
  {
    text: 'TRANSMISSION',
    link: '/transmission',
    nav: true,
  },
]

const Ticker: FC = () => {
  const broken = useAppSelector(selectBroken)

  const TickerItems = useMemo(
    () =>
      tickerItems.map((item, index) => (
        <TickerItem
          key={`ticker-${item.text}`}
          bracket={`[0${index + 1}]`}
          {...item}
        />
      )),
    [tickerItems]
  )

  return (
    <div className={styles.ticker}>
      <div
        className={`${styles['ticker-track']} ${styles['hover-pause']} ${broken && styles['reverse']}`}
        id='track'
      >
        {TickerItems}
        {TickerItems}
      </div>
    </div>
  )
}

export default Ticker
