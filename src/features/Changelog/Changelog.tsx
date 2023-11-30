import { FC, useEffect } from 'react'

import CustomLink from 'src/shared/components/CustomLink'
import ScrambleText from 'src/shared/components/ScrambleText'

import { useAppDispatch } from 'src/shared/redux/store'
// import { selectLanguage } from 'src/shared/redux/settingsSlice/selectors'
// import { Language } from 'src/shared/redux/settingsSlice/initialState'

import { fetchChangelogStart } from './redux/changelogActions'

import { logs, sourceCodeLink } from './lib'

import {
  ChangelogBulletPoint,
  ChangelogContainer,
  ChangelogHeader,
  ChangelogSubtitle,
} from './styledComponents'

const header = 'Chλngelog'
const subtitle = 'Source Code:'

const Changelog: FC = () => {
  const dispatch = useAppDispatch()

  // const language: Language = useAppSelector(selectLanguage)

  useEffect(() => {
    dispatch(fetchChangelogStart())
  }, [])

  return (
    <ChangelogContainer>
      <ChangelogHeader>
        <ScrambleText text={header} />
      </ChangelogHeader>
      <ChangelogSubtitle>
        <ScrambleText text={subtitle} />
        &nbsp;
        <CustomLink to={sourceCodeLink} ariaLabel='Website Github Repo'>
          <ScrambleText text={sourceCodeLink} />
        </CustomLink>
      </ChangelogSubtitle>
    </ChangelogContainer>
  )
}

export default Changelog
