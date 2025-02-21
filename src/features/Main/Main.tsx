import { FC, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Language, Mode } from 'src/shared/redux/settingsSlice/settingsInitial'

import Navbar from 'src/shared/components/Navbar'

import { selectMode } from 'src/shared/redux/settingsSlice/settingsSelectors'
import { useAppDispatch, useAppSelector } from 'src/shared/redux/store'

import { setLanguage } from 'src/shared/redux/settingsSlice/settingsSlice'
import styles from './main.module.css'

const Main: FC = () => {
  const dispatch = useAppDispatch()

  const mode: Mode = useAppSelector(selectMode)

  useEffect(() => {
    dispatch(setLanguage(Language.EN))
  })

  return (
    <div data-colormode={mode} className={styles['main-container']}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Main
