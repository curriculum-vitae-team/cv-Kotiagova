import React from 'react'

import { Input, InputProps } from 'antd'

import { DEFAULT_BORDER_RADIUS } from '../../constants'

export type DefaultInputProps = {
  borderRadius?: number
} & InputProps

const DefaultInput: React.FC<DefaultInputProps> = ({ borderRadius, ...rest }) => {
  return <Input style={{ borderRadius: `${borderRadius || DEFAULT_BORDER_RADIUS}px` }} {...rest} />
}

export default DefaultInput
