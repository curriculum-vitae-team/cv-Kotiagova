import React from 'react'
import { Tabs } from 'antd'

type TabsProps = {
  titles: Array<any>
  contents: Array<any>
}

const AppTabs: React.FC<TabsProps> = (props: TabsProps) => {
  const { titles, contents } = { ...props }
  const items = []
  titles.forEach((title, index) => {
    items.push({ label: title, key: `item-${index}` })
  })
  contents.forEach((content, index) => {
    items[index].children = content
  })

  return <Tabs items={items} />
}

export default AppTabs
