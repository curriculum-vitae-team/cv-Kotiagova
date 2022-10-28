import React from 'react'
import 'antd/dist/antd.css'
import AppInput from './AppInput'
import './AppInput.module.css'

export default {
  title: 'UI/inputs/AppInput',
  component: AppInput,
  argTypes: {
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
