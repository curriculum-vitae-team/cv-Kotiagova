import { Input, InputProps } from 'antd'
import React from 'react'

export type DefaultInputProps = {
  borderRadius?: number
} & InputProps

const DefaultInput: React.FC<DefaultInputProps> = ({ borderRadius, ...rest }) => {
  return <Input style={{ borderRadius: `${borderRadius || 50}px` }} {...rest} />
}

export default DefaultInput
