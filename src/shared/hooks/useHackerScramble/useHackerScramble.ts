import { useState, useEffect, useRef } from 'react'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { getRandomLetter } from 'src/shared/utils/stringUtils'

const useHackerScramble = (
  initialWord: string,
  start: boolean = false,
  reset: boolean = false,
  lang: string = Language.EN
): string => {
  const [word, setWord] = useState<string>(initialWord)
  const interval = useRef<number>(undefined)

  useEffect(() => {
    if (reset) {
      setWord(initialWord)
      return
    }

    if (start) {
      let count: number = 0
      let globalCount: number = 0
      let canChange: boolean = false
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
          clearInterval(interval.current)
          interval.current = undefined
        }
      }, 48)
    }

    return () => {
      clearInterval(interval.current)
      interval.current = undefined
    }
  }, [start, initialWord, reset])

  return word
}

export default useHackerScramble
