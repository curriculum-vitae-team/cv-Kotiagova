import React from 'react'
import { DatePicker } from 'antd'
import { Wrapper } from './DateInput.styles'

type InputProps = {
  handler?: any
}

const DateInput: React.FC<InputProps> = (props: InputProps) => {
  const { handler } = { ...props }
  return (
    <Wrapper>
      <DatePicker onChange={handler} />
    </Wrapper>
  )
}

export default DateInput
