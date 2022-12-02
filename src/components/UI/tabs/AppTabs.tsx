import { Tabs } from 'antd'
import React from 'react'

type TabsProps = {
  titles: Array<any>
  contents: Array<any>
  onChange?: any
}

const AppTabs: React.FC<TabsProps> = ({ titles, contents, onChange }) => {
  const items = []
  titles.forEach((title, index) => {
    items.push({ label: title, key: `item-${index}` })
  })
  contents.forEach((content, index) => {
    items[index].children = content
  })

  return <Tabs items={items} onChange={onChange} />
}

export default AppTabs
