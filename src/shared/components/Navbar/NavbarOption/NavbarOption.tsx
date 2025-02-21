import { FC } from 'react'

import CustomLink from 'src/shared/components/CustomLink'

type NavbarOptionProps = {
  label: string
  route: string
  ariaLabel: string
}

const NavbarOption: FC<NavbarOptionProps> = ({ label, route, ariaLabel }) => {
  return (
    <CustomLink to={route} ariaLabel={ariaLabel} nav>
      {label}
    </CustomLink>
  )
}

export default NavbarOption
