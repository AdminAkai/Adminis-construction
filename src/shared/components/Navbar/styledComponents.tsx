import { motion } from 'framer-motion'
import styled from 'styled-components'

export const NavbarContainer = styled(motion.nav)`
  position: absolute;
  height: 100px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
  padding: 2rem 3rem;
  overflow: hidden;
  /* backdrop-filter: blur(12px); */
  transition: background-color 3s ease;
`
export const NavbarOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`
