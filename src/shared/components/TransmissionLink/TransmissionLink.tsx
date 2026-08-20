import { FC } from 'react'

import { Link } from 'react-router-dom'

import styles from './TransmissionLink.module.css'

const TransmissionLink: FC = () => (
  <Link
    to='https://www.linkedin.com/in/josh-adrian-trinidad/'
    className={styles['transmission-link']}
    target='_blank'
  >
    LINKEDIN
    <span>/in/josh-adrian-trinidad/</span>
  </Link>
)

export default TransmissionLink
