import { FC, PropsWithChildren } from 'react'
import { CustomButtonContainer } from './styledComponents'

import PacmanLoader from 'react-spinners/PacmanLoader'
import { Mode } from 'fs'
import { selectMode } from 'src/shared/redux/settingsSlice/settingsSelectors'
import { useAppSelector } from 'src/shared/redux/store'
import theme from 'src/shared/lib/theme'

type CustomButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined
  loading?: boolean
}

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  type,
  loading,
}) => {
  const mode: Mode = useAppSelector(selectMode)
  return (
    <CustomButtonContainer type={type}>
      {loading ? (
        <PacmanLoader size={10} margin={0} color={theme[mode].Adminis} />
      ) : (
        children
      )}
    </CustomButtonContainer>
  )
}
export default CustomButton
