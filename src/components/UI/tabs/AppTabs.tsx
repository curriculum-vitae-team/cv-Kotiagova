import React from 'react'
import { Tabs } from 'antd'

type TabsProps = {
  titles: Array<any>
  contents: Array<any>
  handler?: any
}

const AppTabs: React.FC<TabsProps> = (props: TabsProps) => {
  const { titles, contents, handler } = { ...props }
  const items = []
  titles.forEach((title, index) => {
    items.push({ label: title, key: `item-${index}` })
  })
  contents.forEach((content, index) => {
    items[index].children = content
  })

  return <Tabs items={items} onChange={handler} />
}

export default AppTabs
