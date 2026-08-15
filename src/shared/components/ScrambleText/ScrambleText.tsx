import { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react'
import useHackerScramble from 'src/shared/hooks/useHackerScramble'

type ScrambleTextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  text: string
  lang?: string
  startOnLoad?: boolean
}

const ScrambleText: FC<ScrambleTextProps> = ({
  text,
  lang,
  startOnLoad = false,
  ...rest
}) => {
  const [start, setStart] = useState<boolean>(startOnLoad)
  const [reset, setReset] = useState<boolean>(false)

  const scrambledText = useHackerScramble(text, start, reset, lang)

  const handleMouseEnter = () => {
    setReset(false)
    setStart(true)
  }

  const handleMouseLeave = () => {
    setStart(false)
    setReset(true)
  }

  return (
    <span
      {...rest}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {scrambledText}
    </span>
  )
}

export default ScrambleText
