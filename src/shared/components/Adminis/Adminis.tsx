import { FC } from 'react'

import ScrambleText from '../ScrambleText'

import styles from './Adminis.module.css'

const AdminisTitle = 'λdminis'

const Adminis: FC = () => (
  <span
    style={{ userSelect: 'none' }}
    aria-label='Adminis Title'
    className={styles.adminis}
  >
    &#91; <ScrambleText text={AdminisTitle} startOnLoad /> &#93;
  </span>
)

export default Adminis
