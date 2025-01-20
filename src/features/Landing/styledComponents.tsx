import styled from 'styled-components'

export const LandingPageContainer = styled.div`
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    padding: 1.5rem;
  }
`

export const LandingPageLogo = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    height: auto;
    padding: 1.5rem;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 1.5rem;
  }
`

export const LandingPageProjects = styled(LandingPageLogo)`
  height: 100vh;
  padding-left: 8rem;
  padding-right: 8rem;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    padding: 0;
    height: auto;
  }
`

export const LandingPageTitle = styled.h1`
  font-size: 8rem;
  text-align: left;
  color: ${({ theme }) => theme.Adminis};
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    height: auto;
    font-size: 4rem;
  }
`

export const LandingPageSubtext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
`

export const LandingPageSubtitle = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.secondary};
  text-align: left;
  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    font-size: 1.5rem;
    text-align: center;
  }
`

export const LandingPageConstruction = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.secondary};
  text-align: left;
  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    font-size: 1rem;
    text-align: center;
  }
`
