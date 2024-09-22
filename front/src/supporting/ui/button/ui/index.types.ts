import { ReactNode } from 'react'

export type ButtonProps = {
  children: string
  isLoading?: boolean
  type?: 'default' | 'primary' | 'dashed' | 'link' | 'text'
  iconPosition?: 'start' | 'end'
  icon?: ReactNode
  size?: 'small' | 'middle' | 'large'
  onClick: () => void
}
