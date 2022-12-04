import { Breadcrumb, Button, Layout, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import { actionCreators, useAppSelector } from '@/state'
import { MenuOutlined } from '@ant-design/icons'
import { useApolloClient } from '@apollo/client'

import {
  StyledBreadCrumb,
  StyledEmail,
  StyledFooter,
  StyledHeader,
  StyledLayout,
  StyledMainLayout,
  StyledMainLayoutContent,
  StyledSidebar
} from './LayoutWrapper.styles'

const LayoutWrapper = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const client = useApolloClient()
  const [collapsed, setCollapsed] = useState(false)
  const user = useAppSelector((state) => state.user)
  const localStorageUser = JSON.parse(localStorage.getItem('user'))

  const { setUser } = bindActionCreators(actionCreators, dispatch)

  const pathSnippets = location.pathname.split('/').filter((i) => i)

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{pathSnippets[index]}</Link>
      </Breadcrumb.Item>
    )
  })

  const menuItems = ['dashboard', 'employees', 'projects'].map((menuItem: string) => ({
    key: menuItem,
    onClick: () => navigate(`/${menuItem}`),
    label: menuItem.charAt(0).toUpperCase() + menuItem.slice(1)
  }))

  const collapseMenu = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed)
  }

  const logOut = () => {
    client.clearStore()
    localStorage.removeItem('user')
    navigate('/auth')
  }

  useEffect(() => {
    if (localStorageUser === null) {
      logOut()
    } else {
      setUser(localStorageUser.user)
    }
  }, [])

  return (
    <StyledLayout>
      <StyledHeader>
        <MenuOutlined onClick={collapseMenu} />
        <h1>Awesome logo;)</h1>
        <StyledEmail>{user.email}</StyledEmail>
        <Button type='primary' onClick={logOut}>
          Log Out
        </Button>
      </StyledHeader>
      <Layout>
        <StyledSidebar collapsed={collapsed} width={200} collapsedWidth={0}>
          <Menu items={menuItems} />
        </StyledSidebar>
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
