import { Link } from 'react-router-dom'

import styled from 'styled-components'

export type CustomATagProps = {
  $isActive?: boolean
  $noUnderline?: boolean
}

export const CustomATag = styled(Link)<CustomATagProps>`
  &:after {
    display: block;
    content: '';
    border-bottom: 0.13rem solid;
    ${({ theme }) => theme.Adminis};
    transform: ${({ $isActive }) => ($isActive ? 'scaleX(1)' : 'scaleX(0)')};
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: ${({ $noUnderline }) => ($noUnderline ? null : 'scaleX(1)')};
  }

  font-size: 1.5rem;
  text-decoration: none;
  user-select: none;
  color: ${({ theme }) => theme.Adminis};
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4375rem;
`
