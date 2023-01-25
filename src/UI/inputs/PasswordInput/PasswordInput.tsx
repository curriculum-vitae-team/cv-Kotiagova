import React from 'react'

import { Input, InputProps } from 'antd'

import { DEFAULT_BORDER_RADIUS } from '../../constants'

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
      style={{ borderRadius: `${borderRadius || DEFAULT_BORDER_RADIUS}px` }}
    />
  )
}

export default PasswordInput
