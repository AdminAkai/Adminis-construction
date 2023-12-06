import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'src/shared/redux/store'

const selectSettingsSliceReducer = (state: RootState) => state.settings

export const selectMode = createSelector(
  [selectSettingsSliceReducer],
  (state) => state.mode
)

export const selectLanguage = createSelector(
  [selectSettingsSliceReducer],
  (state) => state.language
)
