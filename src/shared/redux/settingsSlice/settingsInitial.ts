export enum Mode {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum Language {
  EN = 'en',
  JP = 'jp',
}

type ISettingsInitialState = {
  mode: Mode
  language: Language
  broken: boolean
}

const initialState: ISettingsInitialState = {
  mode: Mode.DARK,
  language: Language.EN,
  broken: false,
}

export default initialState
