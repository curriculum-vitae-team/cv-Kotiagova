import React from 'react'
import 'antd/dist/antd.css'
import Sidepanel from './Sidepanel'

export default {
  title: 'UI/sidepanels/Sidepanel',
  component: Sidepanel,
  argTypes: {
    items: {
      type: 'any[]',
      defaultValue: [
        { label: 'bla bla', key: 'bla bla' },
        {
          label: 'bla bla bla',
          key: 'bla bla bla'
        },
        { label: 'aaaa', key: 'aaa' }
      ]
    }
  }
}

const Template = (arg) => <Sidepanel {...arg} />

export const Default = Template.bind({})
