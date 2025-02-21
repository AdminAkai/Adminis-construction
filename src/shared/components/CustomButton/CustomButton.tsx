import { FC, PropsWithChildren } from 'react'
import styles from './customButton.module.css'

import PacmanLoader from 'react-spinners/PacmanLoader'

type CustomButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined
  loading?: boolean
}

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  type,
  loading,
}) => {
  return (
    <button type={type} className={styles['custom-button-container']}>
      {loading ? (
        <PacmanLoader
          size={10}
          margin={0}
          style={{ color: 'var(--text-primary)' }}
        />
      ) : (
        children
      )}
    </button>
  )
}
export default CustomButton
