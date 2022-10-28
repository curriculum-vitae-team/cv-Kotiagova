import React from 'react'
import 'antd/dist/antd.css'
import DateInput from './DateInput'

export default {
  title: 'UI/inputs/DateInput',
  component: DateInput
}

const Template = (arg) => <DateInput {...arg} />

export const Default = Template.bind({})
