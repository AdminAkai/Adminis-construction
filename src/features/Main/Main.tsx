import { FC, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Language, Mode } from 'src/shared/redux/settingsSlice/settingsInitial'

import Navbar from 'src/shared/components/Navbar'

import { selectMode } from 'src/shared/redux/settingsSlice/settingsSelectors'
import { useAppDispatch, useAppSelector } from 'src/shared/redux/store'

import GlobalStyle from 'src/shared/lib/globalStyles'
import theme from 'src/shared/lib/theme'

import { setLanguage } from 'src/shared/redux/settingsSlice/settingsSlice'
import styles from './main.module.css'

const Main: FC = () => {
  const dispatch = useAppDispatch()

  const mode: Mode = useAppSelector(selectMode)

  useEffect(() => {
    dispatch(setLanguage(Language.EN))
  })

  return (
    <ThemeProvider theme={theme[mode]}>
      <GlobalStyle />
      <div data-colormode={mode} className={styles.container}>
        <Navbar />
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default Main
