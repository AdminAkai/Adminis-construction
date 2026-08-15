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
  const [scrambling, setScrambling] = useState<boolean>(startOnLoad)

  const scrambledText = useHackerScramble(text, scrambling, lang)

  const handleMouseEnter = () => {
    setScrambling(true)
  }

  const handleMouseLeave = () => {
    setScrambling(false)
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
