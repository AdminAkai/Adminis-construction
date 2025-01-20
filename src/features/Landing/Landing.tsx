import { FC, useEffect } from 'react'

import { Grid as LoadingSpinner } from 'react-loader-spinner'

import Grid from 'src/shared/components/Grid'
import Adminis from 'src/shared/components/Adminis'

import { useAppDispatch, useAppSelector } from 'src/shared/redux/store'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import { colors } from 'src/shared/lib/theme'

import { fetchGithubReposStart } from './redux/landingActions'
import {
  selectGithubRepos,
  selectLandingLoading,
} from './redux/landingSelectors'

import ProjectCard from './ProjectCard'

import { subtitle, underConstruction } from './lib'
import {
  LandingPageConstruction,
  LandingPageContainer,
  LandingPageLogo,
  LandingPageProjects,
  LandingPageSubtext,
  LandingPageSubtitle,
  LandingPageTitle,
} from './styledComponents'
import { ScrambleText } from 'adminis-gardenui'
import About from '../About'
import Contact from '../Contact'

const loadingStyles = {
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}

const Landing: FC = () => {
  const dispatch = useAppDispatch()

  const githubRepos: any[] = useAppSelector(selectGithubRepos)
  const loading: boolean = useAppSelector(selectLandingLoading)
  const lang: Language = useAppSelector(selectLanguage)

  useEffect(() => {
    dispatch(fetchGithubReposStart())
  }, [dispatch])

  return (
    <LandingPageContainer>
      <LandingPageLogo>
        <LandingPageTitle>
          <Adminis />
        </LandingPageTitle>
        <LandingPageSubtext>
          <LandingPageSubtitle>
            <ScrambleText text={subtitle[lang]} />
          </LandingPageSubtitle>
          <LandingPageConstruction>
            <ScrambleText text={underConstruction[lang]} />
          </LandingPageConstruction>
        </LandingPageSubtext>
      </LandingPageLogo>
      <LandingPageProjects>
        {loading ? (
          <LoadingSpinner
            color={colors.orange}
            wrapperStyle={loadingStyles}
            ariaLabel='landing page loading spinner'
          />
        ) : (
          <Grid panels={githubRepos.length}>
            {githubRepos.map((repo, index) => (
              <ProjectCard key={`${name}-${index}`} {...repo} />
            ))}
          </Grid>
        )}
      </LandingPageProjects>
      <About />
      <Contact />
    </LandingPageContainer>
  )
}

export default Landing
