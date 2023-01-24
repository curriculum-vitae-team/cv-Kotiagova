import { Input, InputProps } from 'antd'
import React from 'react'

export type PasswordInputProps = {
  borderRadius?: number
} & InputProps

const PasswordInput: React.FC<PasswordInputProps> = ({ borderRadius, ...rest }) => {
  return (
    <Input.Password
      required
      {...rest}
      type='password'
      placeholder='Password'
      style={{ borderRadius: `${borderRadius || 50}px` }}
    />
  )
}

export default PasswordInput
