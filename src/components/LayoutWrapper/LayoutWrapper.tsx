import { MenuOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Layout } from 'antd'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { StyledSidebar } from './components/Sidebar/Sidebar.styles'
import {
  StyledBreadCrumb,
  StyledFooter,
  StyledHeader,
  StyledLayout,
  StyledMainLayout,
  StyledMainLayoutContent
} from './LayoutWrapper.styles'

const LayoutWrapper = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const pathSnippets = location.pathname.split('/').filter((i) => i)

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{pathSnippets[index]}</Link>
      </Breadcrumb.Item>
    )
  })

  const [collapsed, setCollapsed] = useState(false)

  const collapseMenu = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed)
  }

  return (
    <StyledLayout>
      <StyledHeader>
        <MenuOutlined onClick={collapseMenu} />
        <h1>Awesome logo;)</h1>
        <Button type='primary' onClick={() => navigate('/auth')}>
          Log Out
        </Button>
      </StyledHeader>
      <Layout>
        <StyledSidebar collapsed={collapsed} width={200} collapsedWidth={0} />
        <StyledMainLayout>
          <StyledBreadCrumb>{breadcrumbItems}</StyledBreadCrumb>
          <StyledMainLayoutContent>{children}</StyledMainLayoutContent>
        </StyledMainLayout>
      </Layout>
      <StyledFooter>© Innowise-group</StyledFooter>
    </StyledLayout>
  )
}

export default LayoutWrapper
