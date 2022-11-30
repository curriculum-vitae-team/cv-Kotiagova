import { Breadcrumb, BreadcrumbProps, Layout, LayoutProps, Typography, TypographyProps } from 'antd'
import styled from 'styled-components'

export const StyledLayout: React.FC<LayoutProps> = styled(Layout)`
  height: 100vh;
`

export const StyledHeader: React.FC<LayoutProps> = styled(Layout.Header)`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 6vh;
  color: white;

  h1 {
    margin-right: auto;
    margin-bottom: 0;
    color: white;
  }
`

export const StyledEmail = styled<TypographyProps>(Typography)`
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 6vh;
  color: white;
  background-color: #001529;
`
