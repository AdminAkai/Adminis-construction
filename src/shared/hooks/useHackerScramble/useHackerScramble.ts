import { useState, useEffect, useRef } from 'react'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { getRandomLetter } from 'src/shared/utils/stringUtils'

const useHackerScramble = (
  initialWord: string,
  scrambling: boolean,
  lang: string = Language.EN,
  speed: number = 48,
  loop?: boolean
): string => {
  const [word, setWord] = useState<string>(initialWord)
  const interval = useRef<number>(undefined)

  useEffect(() => {
    let count: number = 0
    let globalCount: number = 0
    let canChange: boolean = false

    if (scrambling || word !== initialWord || loop) {
      clearInterval(interval.current)
      interval.current = undefined
      interval.current = setInterval(() => {
        let newWord: string = ''
        for (let i = 0; i < initialWord.length; i++) {
          if (i <= count && canChange) {
            newWord += initialWord[i]
          } else {
            newWord += getRandomLetter(lang)
          }
        }
        setWord(newWord)
        if (canChange) {
          count++
        }
        if (
          globalCount >=
          initialWord.length +
            initialWord.length / 6 -
            (initialWord.length > 10 ? initialWord.length : 0)
        ) {
          canChange = true
        }
        globalCount++
        if (count >= initialWord.length) {
          canChange = false
          count = 0
          globalCount = 0
          if (!loop) {
            setWord(initialWord)
            clearInterval(interval.current)
            interval.current = undefined
          }
        }
      }, speed)
    }

    return () => {
      clearInterval(interval.current)
      interval.current = undefined
    }
  }, [scrambling, initialWord])

  return word
}

export default useHackerScramble
