import React from 'react'

import { SelectProps } from 'antd'

import { DEFAULT_BORDER_RADIUS } from '../../constants'
import { StyledSelect } from './SelectInput.style'

export type SelectInputProps = {
  borderRadius?: number
} & SelectProps

const SelectInput: React.FC<SelectInputProps> = ({ borderRadius, ...rest }) => {
  return <StyledSelect borderRadius={borderRadius || DEFAULT_BORDER_RADIUS} {...rest} />
}

export default SelectInput
