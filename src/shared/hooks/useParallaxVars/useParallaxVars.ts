// hooks/useParallaxVars.js
import { RefObject, useEffect, useRef } from 'react'

const useParallaxVars = (
  smoothing: number = 0.08
): RefObject<HTMLDivElement | null> => {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = stageRef.current
    if (!el) return

    let targetX = 0,
      targetY = 0
    let currentX = 0,
      currentY = 0
    let rafId: number

    function onMouseMove(e: MouseEvent) {
      if (el) {
        const rect = el.getBoundingClientRect()
        targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      }
    }

    function onMouseLeave() {
      targetX = 0
      targetY = 0
    }

    function animate() {
      currentX += (targetX - currentX) * smoothing
      currentY += (targetY - currentY) * smoothing
      if (el) {
        el.style.setProperty('--par-x', currentX.toFixed(4))
        el.style.setProperty('--par-y', currentY.toFixed(4))
      }
      rafId = requestAnimationFrame(animate)
    }

    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
    animate()

    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafId)
    }
  }, [smoothing])

  return stageRef
}

export default useParallaxVars
