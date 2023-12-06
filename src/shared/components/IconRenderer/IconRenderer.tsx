import { FC } from 'react'

import { useAppDispatch, useAppSelector } from 'src/shared/redux/store'
import { selectMode } from 'src/shared/redux/settingsSlice/settingsSelectors'
import { setMode } from 'src/shared/redux/settingsSlice/settingsSlice'
import { Mode } from 'src/shared/redux/settingsSlice/settingsInitial'

import { renderIcon } from './lib'
import { IconButton } from './styledComponents'

const IconRenderer: FC = () => {
  const dispatch = useAppDispatch()

  const mode: Mode = useAppSelector(selectMode)

  const handleChangeTheme = () => {
    if (mode === Mode.DARK) {
      dispatch(setMode(Mode.LIGHT))
    } else {
      dispatch(setMode(Mode.DARK))
    }
  }

  const CurrentIcon = renderIcon[mode]

  return (
    <IconButton onClick={handleChangeTheme} aria-label='Icon Button'>
      <CurrentIcon mode={mode} />
    </IconButton>
  )
}

export default IconRenderer
