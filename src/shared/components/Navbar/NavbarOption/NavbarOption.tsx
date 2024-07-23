import { FC, memo } from 'react'
import { useLocation } from 'react-router-dom'

import CustomLink from 'src/shared/components/CustomLink'

type NavbarOptionProps = {
  label: string
  route: string
  ariaLabel: string
}

const NavbarOption: FC<NavbarOptionProps> = ({ label, route, ariaLabel }) => {
  const { pathname } = useLocation()

  return (
    <CustomLink
      $isActive={pathname === route}
      to={route}
      ariaLabel={ariaLabel}
      nav
    >
      {label}
    </CustomLink>
  )
}

const MemoizedOption = memo(NavbarOption)

export default MemoizedOption
