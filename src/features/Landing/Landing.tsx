import { FC, useEffect } from 'react'

import Grid from 'src/shared/components/Grid'
import Adminis from 'src/shared/components/Adminis'

import { useAppDispatch, useAppSelector } from 'src/shared/redux/store'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import { fetchGithubReposStart } from './redux/landingActions'
import {
  selectGithubRepos,
  selectLandingLoading,
} from './redux/landingSelectors'

import ProjectCard from './ProjectCard'

import { loadingStyles, subtitle, underConstruction } from './lib'
import About from '../About'
import Contact from '../Contact'
import ScrambleText from 'src/shared/components/ScrambleText'
import { PuffLoader } from 'react-spinners'
import styles from './landing.module.css'

const Landing: FC = () => {
  const dispatch = useAppDispatch()

  const githubRepos: any[] = useAppSelector(selectGithubRepos)
  const loading: boolean = useAppSelector(selectLandingLoading)
  const lang: Language = useAppSelector(selectLanguage)

  useEffect(() => {
    dispatch(fetchGithubReposStart())
  }, [dispatch])

  return (
    <div className={styles['landing-container']}>
      <div className={styles['landing-logo']}>
        <div className={styles['landing-title']}>
          <Adminis />
        </div>
        <div className={styles['landing-subtext']}>
          <div className={styles['landing-subtitle']}>
            <ScrambleText text={subtitle[lang]} />
          </div>
          <div className={styles['landing-construction']}>
            <ScrambleText text={underConstruction[lang]} />
          </div>
        </div>
      </div>
      <div className={styles['landing-projects']}>
        {loading ? (
          <PuffLoader cssOverride={loadingStyles} />
        ) : (
          <Grid panels={githubRepos.length}>
            {githubRepos.map((repo, index) => (
              <ProjectCard key={`${name}-${index}`} {...repo} />
            ))}
          </Grid>
        )}
      </div>
      <About />
      <Contact />
    </div>
  )
}

export default Landing
