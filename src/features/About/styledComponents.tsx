import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AboutContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding-left: 4rem;
  padding-right: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    padding: 1.5rem;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const AboutHeader = styled.h1`
  color: ${({ theme }) => theme.Adminis};
  margin-bottom: 1.5rem;
  font-size: 3.5rem;
`

export const AboutSummary = styled.section`
  text-align: left;
`

export const AboutSummaryHeader = styled.h3`
  color: ${({ theme }) => theme.Adminis};
  text-align: left;
`

export const AboutSummaryText = styled.p`
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1.5rem;
  text-align: left;
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
