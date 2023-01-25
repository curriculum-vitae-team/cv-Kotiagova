import React from 'react'

import 'antd/dist/antd.css'

import AppTabs, { AppTabsProps } from './AppTabs'

export default {
  title: 'UI/tabs/AppTabs',
  component: AppTabs,
  argTypes: {
    titles: {
      type: 'any[]',
      defaultValue: ['First Tab', 'Second Tab', 'Third tab']
    },
    contents: {
      type: 'any[]',
      defaultValue: [1, <p>Tab</p>, 'Some tabs here']
    }
  }
}

const Template = (arg: AppTabsProps) => <AppTabs {...arg} />

export const Default = Template.bind({})
