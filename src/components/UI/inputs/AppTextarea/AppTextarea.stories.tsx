import React from 'react'
import 'antd/dist/antd.css'
import 'src/components/UI/inputs/AppInput/AppInput.module.css'
import AppTextarea from './AppTextarea'

export default {
  title: 'UI/inputs/AppTextarea',
  component: AppTextarea,
  argTypes: {
    label: {
      type: 'string',
      defaultValue: 'Description'
    },
    placeholder: {
      type: 'string',
      defaultValue: 'Description...'
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

const Template = (arg) => <AppTextarea {...arg} />

export const Default = Template.bind({})
