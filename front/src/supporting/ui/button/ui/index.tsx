import { Button as ButtonUI } from 'antd'

import { ButtonProps } from './index.types'

export const Button = (props: ButtonProps) => {
  const {
    size = 'middle',
    type = 'primary',
    onClick,
    children,
    icon,
    iconPosition = 'start',
    isLoading = false,
  } = props

  return (
    <ButtonUI
      {...{ size, type, onClick, icon, iconPosition, loading: isLoading }}>
      {children}
    </ButtonUI>
  )
}
