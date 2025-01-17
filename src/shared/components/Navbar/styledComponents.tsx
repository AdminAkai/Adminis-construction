import { motion } from 'framer-motion'
import styled from 'styled-components'

export const NavbarContainer = styled(motion.nav)`
  position: sticky;
  height: 100px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background: transparent;
  padding: 2rem 3rem;
  overflow: hidden;
`
export const NavbarOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`
