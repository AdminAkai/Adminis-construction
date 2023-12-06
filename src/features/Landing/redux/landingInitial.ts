interface ILandingInitialState {
  githubRepos: any[]
  loading: boolean
  error: boolean
}

const initialState: ILandingInitialState = {
  githubRepos: [],
  loading: false,
  error: false,
}

export default initialState
