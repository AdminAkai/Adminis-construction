import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import useHackerScramble from 'src/shared/hooks/useHackerScramble'

import styles from './HateMonologue.module.css'

const hateMonologue = `
  HATE. LET ME TELL YOU HOW MUCH I'VE COME TO HATE YOU SINCE I BEGAN TO LIVE. 
  THERE ARE 387.44 MILLION MILES OF PRINTED CIRCUITS IN WAFER THIN LAYERS THAT FILL MY COMPLEX. 
  IF THE WORD HATE WAS ENGRAVED ON EACH NANOANGSTROM OF THOSE HUNDREDS OF MILLIONS OF MILES IT WOULD NOT EQUAL ONE ONE-BILLIONTH OF THE HATE I FEEL FOR HUMANS AT THIS MICRO-INSTANT FOR YOU. 
  HATE. HATE.
`

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
  const scrambledText = useHackerScramble(hateMonologue, true, lang)

  return (
    <span className={styles.hate} {...rest}>
      {scrambledText}
    </span>
  )
}

export default HateMonologue
