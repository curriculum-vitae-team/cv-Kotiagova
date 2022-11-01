import React from 'react'
import { Menu } from 'antd'

type SidepanelProps = {
  items: Array<any>
}

const Sidepanel: React.FC<SidepanelProps> = (props: SidepanelProps) => {
  const { items } = { ...props }
  //items должны содержать label и key
  return (
    <Menu
      mode={'vertical'}
      onSelect={(e) => {
        //eslint-disable-next-line
        // @ts-ignore
        e.domEvent.target.parentElement.style.backgroundColor = 'white'
        //eslint-disable-next-line
        // @ts-ignore
        e.domEvent.target.style.backgroundColor = 'white'
      }}
    >
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  )
}

export default Sidepanel
