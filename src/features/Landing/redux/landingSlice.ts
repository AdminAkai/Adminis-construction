import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import initialState from './landingInitial'

// Slice
const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setGithubRepos: (state, { payload }: PayloadAction<any[]>) => {
      state.githubRepos = payload
    },
    setLandingLoading: (state) => {
      state.loading = !state.loading
    },
    setLandingErrors: (state) => {
      state.error = !state.error
    },
  },
})

export const { setGithubRepos, setLandingLoading, setLandingErrors } =
  landingSlice.actions

export default landingSlice.reducer
