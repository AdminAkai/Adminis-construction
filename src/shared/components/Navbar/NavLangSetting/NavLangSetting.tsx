import { FC, ReactNode } from 'react'

import { setLanguage } from 'src/shared/redux/settingsSlice/settingsSlice'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'
import { useAppDispatch, useAppSelector } from 'src/shared/redux/store'

import styles from './navLangSetting.module.css'

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
    <div className={styles['language-icon']} onClick={handleChangeLang}>
      {lang?.toUpperCase()}
    </div>
  )
}

export default NavLangSetting
