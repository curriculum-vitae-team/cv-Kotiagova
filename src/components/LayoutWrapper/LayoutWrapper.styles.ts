import { Breadcrumb, BreadcrumbProps, Layout, LayoutProps } from 'antd'
import styled from 'styled-components'

export const StyledHeader = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`

export const StyledMainLayout: React.FC<LayoutProps> = styled(Layout)`
  padding: 0 24px;
`

export const StyledMainLayoutContent: React.FC<LayoutProps> = styled(Layout.Content)`
  padding: 24px;
  margin: 0;
`

export const StyledBreadCrumb: React.FC<BreadcrumbProps> = styled(Breadcrumb)`
  margin: 16px 0;
`

export const StyledFooter: React.FC<LayoutProps> = styled(Layout.Footer)`
  text-align: center;
`
