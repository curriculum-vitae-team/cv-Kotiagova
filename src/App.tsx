import '@/App.css'
import EmployeesPage from '@/pages/EmployeesPage/EmployeesPage'
import { Breadcrumb, Layout, Menu } from 'antd'
import React from 'react'
import MainSidepanel from './components/UI/sidepanels/MainSidepanel/MainSidepanel'

function App() {
  const { Header, Content, Sider } = Layout

  return (
    <div className='App'>
      <Layout>
        <Header className='header'>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']} />
        </Header>
        <Layout>
          <Sider style={{ height: '10%' }} width={200} className='site-layout-background'>
            <MainSidepanel />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Employees</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <EmployeesPage />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
