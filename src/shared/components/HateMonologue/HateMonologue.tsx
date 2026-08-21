import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import Redacted from '../Redacted'

import useHackerScramble from 'src/shared/hooks/useHackerScramble'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'

import {
  monologueOne,
  monologueTwo,
  monologueThree,
  monologueFour,
  monologueFive,
  monologueSix,
  hate,
} from './lib'

import styles from './HateMonologue.module.css'

type HateMonologueProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  lang: Language
  scrambling?: boolean
}

const HateMonologue: FC<HateMonologueProps> = ({
  lang,
  scrambling = false,
  ...rest
}) => {
  const initialScrambleSettings = { scrambling, lang }

  const scrambleMonologueOne = useHackerScramble({
    initialWord: monologueOne,
    ...initialScrambleSettings,
  })
  const scrambleMonologueTwo = useHackerScramble({
    initialWord: monologueTwo,
    ...initialScrambleSettings,
  })
  const scrambleMonologueThree = useHackerScramble({
    initialWord: monologueThree,
    speed: 30,
    ...initialScrambleSettings,
  })
  const scrambleMonologueFour = useHackerScramble({
    initialWord: monologueFour,
    ...initialScrambleSettings,
  })
  const scrambleMonologueFive = useHackerScramble({
    initialWord: monologueFive,
    speed: 24,
    ...initialScrambleSettings,
  })
  const scrambleMonologueSix = useHackerScramble({
    initialWord: monologueSix,
    speed: 72,
    ...initialScrambleSettings,
  })

  return (
    <span className={styles.hate} {...rest}>
      <Redacted>{hate}</Redacted>&#46;&nbsp;
      {scrambleMonologueOne}&nbsp;
      <Redacted>{hate}</Redacted>&nbsp;
      {scrambleMonologueTwo}&nbsp;
      {scrambleMonologueThree}&nbsp;
      {scrambleMonologueFour}&nbsp;
      <Redacted>{hate}</Redacted>&nbsp;
      {scrambleMonologueFive}&nbsp;
      <Redacted>{hate}</Redacted>&nbsp;
      {scrambleMonologueSix}&nbsp;
      <Redacted>{hate}</Redacted>&#46;&nbsp;
      <Redacted>{hate}</Redacted>&#46;&nbsp;
    </span>
  )
}

export default HateMonologue
