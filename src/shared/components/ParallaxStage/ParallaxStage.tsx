// components/ParallaxStage.jsx
import { FC, PropsWithChildren } from 'react'

import ParallaxLayer from '../ParallaxLayer'

import useParallaxVars from 'src/shared/hooks/useParallaxVars'

import styles from './ParallaxStage.module.css'

interface ParallaxStageProps {
  smoothing?: number
}

const ParallaxStage: FC<PropsWithChildren<ParallaxStageProps>> = ({
  children,
  smoothing = 0.08,
}) => {
  const stageRef = useParallaxVars(smoothing)

  return (
    <div ref={stageRef} className={styles['parallax-stage']}>
      {/* <ParallaxLayer depth={8} className={styles['layer-back']} /> */}
      <ParallaxLayer depth={20} className={styles['layer-mid']} />
      {/* <ParallaxLayer depth={38} className={styles['layer-front']} /> */}
      <div className={styles['parallax-content']}>{children}</div>
    </div>
  )
}

export default ParallaxStage
