import React from 'react'
import { Menu } from 'antd'
import css from './Sidepanel.module.css'

const Sidepanel: React.FC = () => {
  return (
    //TODO: needs white background when selected
    //+ icons
    <Menu className={css.menu} mode={'vertical'}>
      <Menu.Item>Dashboard</Menu.Item>
      <Menu.Item>Employees</Menu.Item>
      <Menu.Item>Projects</Menu.Item>
      <Menu.Item className={css.last}>go back</Menu.Item>
    </Menu>
  )
}

export default Sidepanel
