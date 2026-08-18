import { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react'
import useHackerScramble from 'src/shared/hooks/useHackerScramble'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'

type ScrambleTextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  text: string
  lang?: Language
  startOnLoad?: boolean
}

const ScrambleText: FC<ScrambleTextProps> = ({
  text,
  lang,
  startOnLoad = false,
  ...rest
}) => {
  const [scrambling, setScrambling] = useState<boolean>(startOnLoad)

  const scrambledText = useHackerScramble({
    initialWord: text,
    scrambling,
    lang,
  })

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
