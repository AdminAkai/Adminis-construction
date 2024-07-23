import { FC } from 'react'
import { useHackerScramble } from 'src/shared/hooks/stringHooks'

type ScrambleTextProps = {
  text: string
}

const ScrambleText: FC<ScrambleTextProps> = ({ text }) => {
  const scrambledText = useHackerScramble(text)

  return <span>{scrambledText}</span>
}

export default ScrambleText
