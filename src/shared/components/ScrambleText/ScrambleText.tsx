/**
 * ScrambleText is a freely customizable scramble-text effect.
 * @param {string} text - Text to scramble.
 */

import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import useHackerScramble from '../hooks/useHackerScramble'

type ScrambleTextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  text: string
}

const ScrambleText: FC<ScrambleTextProps> = ({ text, ...rest }) => {
  const scrambledText = useHackerScramble(text)

  return <span {...rest}>{scrambledText}</span>
}

export default ScrambleText
