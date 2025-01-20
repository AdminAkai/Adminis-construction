import { FC } from 'react'

import IconRenderer from 'src/shared/components/IconRenderer'

import NavbarAdminis from './NavbarAdminis'
import NavLangSetting from './NavLangSetting'

import { NavbarContainer, NavbarOptions } from './styledComponents'

const Navbar: FC = () => {
  return (
    <NavbarContainer
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <NavbarAdminis />
      <NavbarOptions>
        <NavLangSetting />
        <IconRenderer />
      </NavbarOptions>
    </NavbarContainer>
  )
}

export default Navbar
