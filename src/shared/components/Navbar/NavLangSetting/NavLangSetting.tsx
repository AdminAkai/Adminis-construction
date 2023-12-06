import { FC, ReactNode } from 'react'

import { setLanguage } from 'src/shared/redux/settingsSlice'
import { Language } from 'src/shared/redux/settingsSlice/initialState'
import { selectLanguage } from 'src/shared/redux/settingsSlice/selectors'
import { useAppDispatch, useAppSelector } from 'src/shared/redux/store'

import { LanguageIcon } from './styledComponents'

const NavLangSetting: FC = (): ReactNode => {
  const dispatch = useAppDispatch()

  const lang: Language = useAppSelector(selectLanguage)

  const handleChangeLang = () => {
    if (lang === Language.EN) {
      dispatch(setLanguage(Language.JP))
    } else {
      dispatch(setLanguage(Language.EN))
    }
  }

  return (
    <LanguageIcon onClick={handleChangeLang}>{lang.toUpperCase()}</LanguageIcon>
  )
}

export default NavLangSetting
