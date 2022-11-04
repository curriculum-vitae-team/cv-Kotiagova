import React from 'react'
import 'antd/dist/antd.css'
import DateInput from './DateInput'

function example() {
  console.log('click')
}

export default {
  title: 'UI/inputs/DateInput',
  component: DateInput,
  argTypes: {
    onChange: {
      action: 'onChange',
      type: 'any',
      description: 'Обработчик ввода',
      defaultValue: example
    }
  }
}

const Template = (arg) => <DateInput {...arg} />

export const Default = Template.bind({})
