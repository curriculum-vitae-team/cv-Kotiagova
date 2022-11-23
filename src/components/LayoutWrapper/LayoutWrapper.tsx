import { Breadcrumb, Layout, Menu } from 'antd'
import React, { useState } from 'react'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import MainSidepanel from '../UI/sidepanels/MainSidepanel/MainSidepanel'

const { Header, Content, Sider, Footer } = Layout

const LayoutWrapper = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout>
      <Header className='header'>
        <h1 style={{ color: '#fff' }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            onClick: () => setCollapsed(!collapsed),
            style: {
              color: '#fff'
            }
          })}{' '}
          Awesome logo
        </h1>
      </Header>
      <Layout>
        <Sider collapsed={collapsed}>
          <MainSidepanel />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Employees</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
  )
}

export default LayoutWrapper
