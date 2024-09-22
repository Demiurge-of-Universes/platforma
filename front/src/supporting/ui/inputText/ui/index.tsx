import { Input } from 'antd'

import { InputTextProps } from './index.types'

export const inputText = (props: InputTextProps) => {
  const { value, defaultValue, onChange, status } = props

  return (
    <Input
      onChange={e => onChange(e.target.value)}
      size="middle"
      {...{ value, defaultValue, status }}
    />
  )
}
