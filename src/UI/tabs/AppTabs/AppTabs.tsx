import React from 'react'

import { Tabs, TabsProps } from 'antd'

export type AppTabsProps = {
  titles: Array<any>
  contents: Array<any>
  onChange?: () => void
} & TabsProps

const AppTabs: React.FC<AppTabsProps> = ({ titles, contents, onChange, ...rest }) => {
  const items = titles.map((title, index) => ({
    label: title,
    key: `item-${index}`,
    children: contents[index]
  }))

  return <Tabs items={items} onChange={onChange} {...rest} />
}

export default AppTabs
