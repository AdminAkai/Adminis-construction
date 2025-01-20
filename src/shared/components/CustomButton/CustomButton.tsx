import { FC, PropsWithChildren } from 'react'
import { CustomButtonContainer } from './styledComponents'

type CustomButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined
}

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  type,
}) => <CustomButtonContainer type={type}>{children}</CustomButtonContainer>
export default CustomButton
