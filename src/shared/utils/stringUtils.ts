import { Language } from '../redux/settingsSlice/settingsInitial'
import { japaneseCharacters } from './japaneseCharacters'

const rand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

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

export const getRandomLetter = (lang: string): string => {
  if (lang === Language.JP)
    return japaneseCharacters[rand(0, japaneseCharacters.length - 1)]
  return alphabet[rand(0, alphabet.length - 1)]
}

export const getRandomWord = (word: string, lang: string): string => {
  let finalWord = ''
  for (let i = 0; i < word.length; i++) {
    finalWord += word[i] == ' ' ? ' ' : getRandomLetter(lang)
  }

  return finalWord
}
