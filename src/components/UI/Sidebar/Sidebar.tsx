import React from 'react'
import { Layout, LayoutProps, Menu } from 'antd'

const { Sider } = Layout

const Sidebar: React.FC<LayoutProps> = (props) => {
  return (
    <Sider {...props}>
      <Menu />
    </Sider>
  )
}

export default Sidebar
