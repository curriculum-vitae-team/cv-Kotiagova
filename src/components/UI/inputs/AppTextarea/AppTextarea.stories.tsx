import React from 'react'
import 'antd/dist/antd.css'
import AppTextarea from './AppTextarea'

function example() {
  console.log('click')
}

export default {
  title: 'UI/inputs/AppTextarea',
  component: AppTextarea,
  argTypes: {
    handler: {
      action: 'handler',
      type: 'ChangeEventHandler',
      description: 'Обработчик ввода',
      defaultValue: example
    },
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
