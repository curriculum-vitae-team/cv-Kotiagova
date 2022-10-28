import React from 'react'
import 'antd/dist/antd.css'
import styles from 'src/components/UI/sidepanels/MainSidepanel/MainSidepanel.module.css'
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
    },
    css: {
      type: 'any'
    }
  }
}

const Template = (arg) => <Sidepanel {...arg} />

export const Default = Template.bind({})
export const Main = Template.bind({})
Main.args = {
  items: [
    { label: 'Dashboard', key: 'Dashboard' },
    { label: 'Employees', key: 'Employees' },
    { label: 'Projects', key: 'Projects' },
    { label: 'go back', key: 'back', css: styles.last }
  ],
  css: styles.menu
}
