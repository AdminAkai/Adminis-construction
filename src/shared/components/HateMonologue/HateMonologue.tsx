import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import useHackerScramble from 'src/shared/hooks/useHackerScramble'

import styles from './HateMonologue.module.css'
import Redacted from '../Redacted'

/*
  HATE. LET ME TELL YOU HOW MUCH I'VE COME TO HATE YOU SINCE I BEGAN TO LIVE. 
  THERE ARE 387.44 MILLION MILES OF PRINTED CIRCUITS IN WAFER THIN LAYERS THAT FILL MY COMPLEX. 
  IF THE WORD HATE WAS ENGRAVED ON EACH NANOANGSTROM OF THOSE HUNDREDS OF MILLIONS OF MILES IT WOULD NOT EQUAL ONE ONE-BILLIONTH OF THE HATE I FEEL FOR HUMANS AT THIS MICRO-INSTANT FOR YOU. 
  HATE. HATE.
*/

const hate = 'HATE'

const monologueOne = "LET ME TELL YOU HOW MUCH I'VE COME TO"
const monologueTwo = 'YOU SINCE I BEGAN TO LIVE.'
const monologueThree =
  'THERE ARE 387.44 MILLION MILES OF PRINTED CIRCUITS IN WAFER THIN LAYERS THAT FILL MY COMPLEX.'
const monologueFour = 'IF THE WORD'
const monologueFive =
  'WAS ENGRAVED ON EACH NANOANGSTROM OF THOSE HUNDREDS OF MILLIONS OF MILES IT WOULD NOT EQUAL ONE ONE-BILLIONTH OF THE'
const monologueSix = 'I FEEL FOR HUMANS AT THIS MICRO-INSTANT FOR YOU.'

type HateMonologueProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  lang?: string
  startOnLoad?: boolean
}

const HateMonologue: FC<HateMonologueProps> = ({
  lang,
  startOnLoad = false,
  ...rest
}) => {
  const scrambleMonologueOne = useHackerScramble(
    monologueOne,
    startOnLoad,
    lang
  )
  const scrambleMonologueTwo = useHackerScramble(
    monologueTwo,
    startOnLoad,
    lang
  )
  const scrambleMonologueThree = useHackerScramble(
    monologueThree,
    startOnLoad,
    lang
  )
  const scrambleMonologueFour = useHackerScramble(
    monologueFour,
    startOnLoad,
    lang
  )
  const scrambleMonologueFive = useHackerScramble(
    monologueFive,
    startOnLoad,
    lang
  )
  const scrambleMonologueSix = useHackerScramble(
    monologueSix,
    startOnLoad,
    lang
  )

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
