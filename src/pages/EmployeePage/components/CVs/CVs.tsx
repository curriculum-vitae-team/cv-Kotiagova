import { List } from 'antd'
import React from 'react'

type CVsProps = {
  canEdit: boolean
  CVsData: CV[]
}

const CVs: React.FC<CVsProps> = ({ canEdit, CVsData }) => {
  const info = CVsData.map((cv: CV) => ({
    title: cv.name
  }))

  return (
    <List
      renderItem={(item) => <List.Item aria-disabled={!canEdit}>{item.title}</List.Item>}
      dataSource={info}
    />
  )
}

export default CVs
