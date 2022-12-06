import { List } from 'antd'
import React from 'react'

type CVsProps = {
  CVsData: ProfilePageUser['cvs']
}

const CVs: React.FC<CVsProps> = ({ CVsData }) => {
  const info = CVsData.map((cv: CV) => ({
    title: cv.name
  }))

  return <List renderItem={(item) => <List.Item>{item.title}</List.Item>} dataSource={info} />
}

export default CVs
