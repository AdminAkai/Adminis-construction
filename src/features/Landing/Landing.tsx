import { FC } from 'react'

import EpisodeOne from '../EpisodeOne/EpisodeOne'
import EpisodeTwo from '../EpisodeTwo/EpisodeTwo'

import styles from './Landing.module.css'

const Landing: FC = () => (
  <div className={styles['landing-container']}>
    <EpisodeOne />
    <EpisodeTwo />
  </div>
)

export default Landing
