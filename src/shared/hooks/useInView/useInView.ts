import { RefObject, useEffect, useRef, useState } from 'react'

const useInView = (
  options = { threshold: 0.2 }
): [RefObject<HTMLElement | null>, boolean] => {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(entry.target) // animate once, then stop watching
      }
    }, options)

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

export default useInView
