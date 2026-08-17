import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Mode } from 'src/shared/redux/settingsSlice/settingsInitial'

import Navbar from 'src/shared/components/Navbar'

import { selectMode } from 'src/shared/redux/settingsSlice/settingsSelectors'
import { useAppSelector } from 'src/shared/redux/store'

import styles from './main.module.css'
import ParallaxStage from 'src/shared/components/ParallaxStage'

const Main: FC = () => {
  const mode: Mode = useAppSelector(selectMode)

  return (
    <div data-colormode={mode} className={styles['main-container']}>
      <Navbar />
      <ParallaxStage>
        <Outlet />
      </ParallaxStage>
    </div>
  )
}

export default Main
