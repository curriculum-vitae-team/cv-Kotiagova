import { SelectProps } from 'antd'
import React from 'react'
import { StyledSelect } from './SelectInput.style'

export type SelectInputProps = {
  borderRadius?: number
} & SelectProps

const SelectInput: React.FC<SelectInputProps> = ({ borderRadius, ...rest }) => {
  return <StyledSelect borderRadius={borderRadius || 50} {...rest} />
}

export default SelectInput
