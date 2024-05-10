import {
  takeLatest,
  call,
  put,
  fork,
  CallEffect,
  PutEffect,
} from 'redux-saga/effects'
import { UnknownAction } from 'redux'

import { fetchGithubReposStart } from './landingActions'
import {
  setGithubRepos,
  setLandingErrors,
  setLandingLoading,
} from './landingSlice'
import { fetchGithubReposCall } from './landingApi'

// Worker Sagas
function* fetchGithubRepos(): Generator<
  CallEffect<unknown[]> | PutEffect<UnknownAction>
> {
  const githubRepos: any = yield call(fetchGithubReposCall)
  yield put(setLandingLoading())
  yield put(setLandingErrors())
  try {
    yield put(setGithubRepos(githubRepos))
  } catch (err) {
    console.error(err)
    yield put(setLandingErrors())
  } finally {
    yield put(setLandingLoading())
  }
}

// Watcher Sagas
function* watchFetchGithubRepo() {
  yield takeLatest(fetchGithubReposStart, fetchGithubRepos)
}

const landingSagas = [fork(watchFetchGithubRepo)]

export default landingSagas
