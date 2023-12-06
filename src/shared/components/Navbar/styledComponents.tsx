import { motion } from 'framer-motion'
import styled from 'styled-components'

export const NavbarContainer = styled(motion.nav)`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: transparent;
  padding: 2rem 3rem;
`
export const NavbarOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`
