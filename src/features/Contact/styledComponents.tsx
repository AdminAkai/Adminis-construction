import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ContactContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding-left: 8rem;
  padding-right: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: center;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
  }
`

export const ContactInfo = styled.section`
  width: 100%;
`

export const ContactHeader = styled.h1`
  color: ${({ theme }) => theme.Adminis};
  margin-bottom: 1.5rem;
  font-size: 7rem;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    font-size: 3rem;
  }
`

export const ContactSummary = styled.section`
  text-align: left;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    text-align: center;
  }
`

export const ContactSummaryHeader = styled.h3`
  color: ${({ theme }) => theme.Adminis};
  font-size: 2rem;
  text-align: left;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    text-align: center;
  }
`
