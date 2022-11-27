import { Layout, Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

const Sidebar: React.FC = (props) => {
  const navigate = useNavigate()

  return (
    <Sider {...props}>
      <Menu>
        <Menu.Item onClick={() => navigate('/dashboard')} key='dashboard'>
          Dashboard
        </Menu.Item>
        <Menu.Item onClick={() => navigate('/employees')} key='employees'>
          Employees
        </Menu.Item>
        <Menu.Item onClick={() => navigate('/projects')} key='projects'>
          Projects
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
