import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainGrid = styled(motion.div)<{ $gridPanels: number }>`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $gridPanels }) => `repeat(${$gridPanels}, 1fr)`};
  grid-template-rows: ${({ $gridPanels }) => `repeat(${$gridPanels / 3}, 1fr)`};
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;

  & > div {
    transition:
      scale 350ms ease-in-out,
      opacity 350ms ease-in-out;
  }

  &:has(div:hover) > div:not(:hover) {
    scale: 0.8;
    opacity: 0.6;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
  }
`
