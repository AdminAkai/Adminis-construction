export enum Mode {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum Language {
  EN = 'en',
  JP = 'jp',
}

interface ISettingsInitialState {
  mode: Mode
  language: Language
}

const initialState: ISettingsInitialState = {
  mode: Mode.DARK,
  language: Language.EN,
}

export default initialState
