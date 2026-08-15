import { FC, PropsWithChildren } from 'react'

interface ParallaxLayerProps {
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
      className={`parallax-layer ${className}`}
      style={{
        transform: `translate(calc(var(--par-x) * ${depth}px), calc(var(--par-y) * ${depth}px))`,
      }}
    >
      {children}
    </div>
  )
}

export default ParallaxLayer
