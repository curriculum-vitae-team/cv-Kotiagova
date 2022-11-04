import React from 'react'
import 'antd/dist/antd.css'
import AppInput from './AppInput'

function example() {
  console.log('click')
}

export default {
  title: 'UI/inputs/AppInput',
  component: AppInput,
  argTypes: {
    onChange: {
      action: 'onChange',
      type: 'ChangeEventHandler',
      description: 'Обработчик ввода',
      defaultValue: example
    },
    label: {
      type: 'string',
      defaultValue: 'Username'
    },
    placeholder: {
      type: 'string',
      defaultValue: 'Username...'
    },
    value: {
      type: 'string',
      defaultValue: 'anna'
    },
    status: {
      type: 'string',
      defaultValue: '',
      options: ['', 'error'],
      control: {
        type: 'radio'
      }
    }
  }
}

const Template = (arg) => <AppInput {...arg} />

export const Default = Template.bind({})
