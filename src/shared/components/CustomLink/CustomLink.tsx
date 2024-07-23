import { FC, PropsWithChildren } from 'react'

import { CustomATag, CustomATagProps } from './styledComponents'

export type CustomLinkProps = CustomATagProps & {
  to: string
  ariaLabel: string
  nav?: boolean
  noUnderline?: boolean
}

const CustomLink: FC<PropsWithChildren<CustomLinkProps>> = ({
  $isActive,
  nav,
  noUnderline,
  to,
  children,
  ariaLabel,
}) => (
  <CustomATag
    to={to}
    $isActive={$isActive}
    target={nav ? undefined : '_blank'}
    aria-label={ariaLabel}
    $noUnderline={noUnderline}
  >
    {children}
  </CustomATag>
)

export default CustomLink
