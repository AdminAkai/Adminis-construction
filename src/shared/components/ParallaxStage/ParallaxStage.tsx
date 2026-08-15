// components/ParallaxStage.jsx
import { FC, PropsWithChildren } from 'react'

import ParallaxLayer from '../ParallaxLayer'

import useParallaxVars from 'src/shared/hooks/useParallaxVars'

import styles from './ParallaxStage.module.css'

type ParallaxStageProps = {
  smoothing?: number
}

const ParallaxStage: FC<PropsWithChildren<ParallaxStageProps>> = ({
  children,
  smoothing = 0.08,
}) => {
  const stageRef = useParallaxVars(smoothing)

  return (
    <div ref={stageRef} className={styles['parallax-stage']}>
      <ParallaxLayer depth={20} className={styles['layer-dots']} />
      <div className={styles['parallax-content']}>{children}</div>
    </div>
  )
}

export default ParallaxStage
