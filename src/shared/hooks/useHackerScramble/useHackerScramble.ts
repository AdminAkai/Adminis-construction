import { useState, useEffect } from 'react'

import { getRandomLetter } from '../../utils/stringUtils'

const useHackerScramble = (initialWord: string): string => {
  const [word, setWord] = useState<string>('')
  const [start, setStart] = useState<boolean>(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined
    if (start) {
      let count: number = 0
      let globalCount: number = 0
      let canChange: boolean = false
      interval = setInterval(() => {
        let newWord: string = ''
        for (let i = 0; i < initialWord.length; i++) {
          if (i <= count && canChange) {
            newWord += initialWord[i]
          } else {
            newWord += getRandomLetter()
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
          setStart(false)
          canChange = false
          count = 0
          globalCount = 0
        }
      }, 48)
    }
    if (word !== initialWord && !start) {
      setStart(true)
    }
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, initialWord])

  return word
}

export default useHackerScramble
