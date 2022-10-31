import React from 'react'
import { DatePicker } from 'antd'

type InputProps = {
  handler?: any
}

const DateInput: React.FC<InputProps> = (props: InputProps) => {
  const { handler } = { ...props }
  return <DatePicker style={{ width: '14.888vw' }} onChange={handler} />
}

export default DateInput
