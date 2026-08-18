import { useState, useEffect, useRef } from 'react'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { getRandomLetter } from 'src/shared/utils/stringUtils'

export type HackerScrambleArgs = {
  initialWord: string
  lang?: Language
  speed?: number
  scrambling?: boolean
  infinite?: boolean
}

const useHackerScramble = ({
  initialWord,
  scrambling,
  lang = Language.EN,
  speed = 48,
  infinite,
}: HackerScrambleArgs): string => {
  const [word, setWord] = useState<string>(initialWord)
  const interval = useRef<number>(undefined)

  useEffect(() => {
    let count: number = 0
    let globalCount: number = 0
    let canChange: boolean = false

    if (scrambling || word !== initialWord || infinite) {
      clearInterval(interval.current)
      interval.current = undefined
      interval.current = setInterval(() => {
        let newWord: string = ''
        if (infinite) {
          for (let i = 0; i < initialWord.length; i++) {
            newWord += getRandomLetter(lang)
          }
          setWord(newWord)
          return
        }
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
          setWord(initialWord)
          clearInterval(interval.current)
          interval.current = undefined
        }
      }, speed)
    }

    return () => {
      clearInterval(interval.current)
      interval.current = undefined
    }
  }, [initialWord, scrambling, infinite, lang, speed])

  return word
}

export default useHackerScramble
