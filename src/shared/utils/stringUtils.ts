const rand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getRandomLetter = (): string => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  return alphabet[rand(0, alphabet.length - 1)]
}

export const getRandomWord = (word: string): string => {
  let finalWord = ''
  for (let i = 0; i < word.length; i++) {
    finalWord += word[i] == ' ' ? ' ' : getRandomLetter()
  }

  return finalWord
}
