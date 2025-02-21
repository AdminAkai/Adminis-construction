export interface languageText {
  en: string
  jp: string
}

interface GridItemObject {
  name: string
  description: languageText
  props: {
    to: string
    ariaLabel: string
  }
}

export type GridItemsType = GridItemObject[]
