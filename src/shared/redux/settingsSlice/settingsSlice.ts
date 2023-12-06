import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import initialState, { Language, Mode } from './settingsInitial'

// Slice
const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMode: (state, { payload }: PayloadAction<Mode>) => {
      state.mode = payload
    },
    setLanguage: (state, { payload }: PayloadAction<Language>) => {
      state.language = payload
    },
  },
})

export const { setMode, setLanguage } = settingsSlice.actions

export default settingsSlice.reducer
