import { FC } from 'react'

import IconRenderer from 'src/shared/components/IconRenderer'

import NavbarAdminis from './NavbarAdminis'
import NavbarOption from './NavbarOption'
import NavLangSetting from './NavLangSetting'

import { allNavbarOptions } from './lib'
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
        {allNavbarOptions.map((option, i) => (
          <NavbarOption
            {...option}
            key={`${i}-${option.label}`}
            ariaLabel={option.label}
          />
        ))}
      </NavbarOptions>
    </NavbarContainer>
  )
}

export default Navbar
