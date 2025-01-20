import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AboutContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding-left: 8rem;
  padding-right: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 1.5rem 0;
  }
`

export const AboutInfo = styled.section`
  width: 100vw;
  padding-right: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    padding: 1.5rem;
  }
`

export const AboutHeader = styled.h1`
  color: ${({ theme }) => theme.Adminis};
  margin-bottom: 1.5rem;
  font-size: 7rem;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    font-size: 4rem;
  }
`

export const AboutSummary = styled.section`
  text-align: left;
`

export const AboutSummaryHeader = styled.h3`
  color: ${({ theme }) => theme.Adminis};
  font-size: 2rem;
  text-align: left;
`

export const AboutSummaryText = styled.p`
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: left;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    font-size: 1rem;
  }
`

export const AboutResume = styled.a`
  &:after {
    display: block;
    content: '';
    border-bottom: 0.13rem solid ${({ theme }) => theme.Adminis};
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
  font-size: 1.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.Adminis};
  text-align: right;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4375rem;
`
