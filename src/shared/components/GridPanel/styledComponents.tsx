import styled from 'styled-components'
import { motion } from 'framer-motion'

export const GridPanelBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.Adminis};
  font-size: 3rem;
  padding: 1.5rem;
  grid-area: input;
  grid-column: auto;
  grid-row: auto;
  place-self: center;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.Adminis};
  border-radius: 8px;
  transition:
    box-shadow 0.3s ease-in-out,
    background-color 0.3s ease;

  &:hover {
    box-shadow: 0.3rem 0.3rem 0.3rem ${({ theme }) => theme.Adminis};
    background-color: ${({ theme }) => theme.primary};
    transition: background-color 25ms ease-in-out;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    margin-top: 1rem;
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;

    &:hover {
      box-shadow: none;
      background-color: none;
      transition: none;
    }
  }
`
