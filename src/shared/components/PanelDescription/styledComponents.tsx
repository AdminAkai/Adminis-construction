import styled from 'styled-components'

export const ProjectDescription = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.5rem;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    font-size: 1rem;
  }
`
