import { FC, PropsWithChildren } from 'react'

import { CustomLinkProps } from './components/CustomLink/CustomLink'

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
  Link: FC<PropsWithChildren<CustomLinkProps>>
}

export type GridItemsType = GridItemObject[]
