import React from 'react'
import 'antd/dist/antd.css'
import MainSidepanel from './MainSidepanel'

export default {
  title: 'UI/sidepanels/MainSidepanel',
  component: MainSidepanel
}

const MainTemplate = () => <MainSidepanel />

export const Main = MainTemplate.bind({})
