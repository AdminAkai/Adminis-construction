// components/ParallaxStage.jsx
import { FC, PropsWithChildren } from 'react'

import ParallaxLayer from '../ParallaxLayer'

import useParallaxVars from 'src/shared/hooks/useParallaxVars'

interface ParallaxStageProps {
  smoothing: number
}

const ParallaxStage: FC<PropsWithChildren<ParallaxStageProps>> = ({
  children,
  smoothing = 0.08,
}) => {
  const stageRef = useParallaxVars(smoothing)

  return (
    <div ref={stageRef} className='parallax-stage'>
      <ParallaxLayer depth={8} className='layer-back' />
      <ParallaxLayer depth={20} className='layer-mid' />
      <ParallaxLayer depth={38} className='layer-front' />
      <div className='parallax-content'>{children}</div>
    </div>
  )
}

export default ParallaxStage
