import { Breadcrumb, BreadcrumbProps, Layout, LayoutProps } from 'antd'
import styled from 'styled-components'

export const StyledHeader: React.FC<LayoutProps> = styled(Layout.Header)`
  display: flex;
  align-items: center;
  gap: 10px;

  .anticon {
    color: white;
  }

  h1 {
    margin-right: auto;
    margin-bottom: 0;
    color: white;
  }
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
