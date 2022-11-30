import { DatePicker } from 'antd'
import React from 'react'
import { Wrapper } from './DateInput.styles'

type InputProps = {
  onChange?: any
}

const DateInput: React.FC<InputProps> = (props: InputProps) => {
  const { onChange } = { ...props }
  return (
    <Wrapper>
      <DatePicker onChange={onChange} />
    </Wrapper>
  )
}

export default DateInput
