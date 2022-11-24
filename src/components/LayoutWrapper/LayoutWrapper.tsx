import { Breadcrumb, Layout } from 'antd'
import React, { useState } from 'react'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import MainSidepanel from '../UI/sidepanels/MainSidepanel/MainSidepanel'
import {
  StyledBreadCrumb,
  StyledFooter,
  StyledHeader,
  StyledMainLayout,
  StyledMainLayoutContent
} from './LayoutWrapper.styles'

const { Header, Sider } = Layout

const LayoutWrapper = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  const handleCollapseClick = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed)
  }

  return (
    <Layout>
      <Header>
        <StyledHeader>
          {collapsed ? (
            <MenuUnfoldOutlined onClick={handleCollapseClick} />
          ) : (
            <MenuFoldOutlined onClick={handleCollapseClick} />
          )}
          Awesome logo
        </StyledHeader>
      </Header>
      <Layout>
        <Sider collapsed={collapsed} width={200}>
          <MainSidepanel />
        </Sider>
        <StyledMainLayout>
          <StyledBreadCrumb>
            <Breadcrumb.Item>Employees</Breadcrumb.Item>
          </StyledBreadCrumb>
          <StyledMainLayoutContent>{children}</StyledMainLayoutContent>
        </StyledMainLayout>
      </Layout>
      <StyledFooter>Footer</StyledFooter>
    </Layout>
  )
}

export default LayoutWrapper
