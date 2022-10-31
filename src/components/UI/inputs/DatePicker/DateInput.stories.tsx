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
    handler: {
      action: 'handler',
      type: 'any',
      description: 'Обработчик ввода',
      defaultValue: example
    }
  }
}

const Template = (arg) => <DateInput {...arg} />

export const Default = Template.bind({})
