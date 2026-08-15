import { FC, PropsWithChildren } from 'react'

import styles from './ParallaxLayer.module.css'

type ParallaxLayerProps = {
  depth: number
  className: string
}

const ParallaxLayer: FC<PropsWithChildren<ParallaxLayerProps>> = ({
  depth = 20,
  className = '',
  children,
}) => {
  return (
    <div
      className={`${styles['parallax-layer']} ${className}`}
      style={{
        transform: `translate(calc(var(--par-x) * ${depth}px), calc(var(--par-y) * ${depth}px))`,
      }}
    >
      {children}
    </div>
  )
}

export default ParallaxLayer
