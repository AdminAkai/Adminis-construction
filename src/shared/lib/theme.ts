interface IColors {
  orange: '#fb7e14'
  black: '#000000'
  darkGray: '#151515'
  gray: '#292929'
  white: '#ffffff'
}

interface IStyleDefaults {
  mobileMediaQuery: '959px'
}

interface IThemeColors extends IStyleDefaults {
  primary: string
  nav: string
  navOption: string
  Adminis: string
  secondary: string
}

interface ITheme {
  [key: string]: IThemeColors
}

const styleDefaults: IStyleDefaults = {
  mobileMediaQuery: '959px',
}

export const colors: IColors = {
  orange: '#fb7e14',
  black: '#000000',
  darkGray: '#151515',
  gray: '#292929',
  white: '#ffffff',
}

const lightTheme: IThemeColors = {
  primary: colors.white,
  nav: colors.gray,
  navOption: colors.white,
  Adminis: colors.orange,
  secondary: colors.gray,
  ...styleDefaults,
}

const darkTheme: IThemeColors = {
  primary: colors.gray,
  nav: colors.orange,
  navOption: colors.gray,
  Adminis: colors.orange,
  secondary: colors.white,
  ...styleDefaults,
}

const theme: ITheme = {
  lightTheme,
  darkTheme,
}

export default theme
