import React from 'react'

import { Table } from 'antd'

import { useColumns } from './hooks/useColumns'

type ResumesListProps = {
  canEdit: boolean
  CVsData: CV[] | []
  isFetching: boolean
  unbindResume: (id: string) => void
}

const ResumesList: React.FC<ResumesListProps> = ({
  CVsData,
  unbindResume,
  isFetching,
  canEdit
}) => {
  const columns = useColumns(unbindResume)

  if (!canEdit) {
    columns.splice(-1)
  }

  return (
    <Table
      bordered
      rowKey='id'
      columns={columns}
      tableLayout='auto'
      pagination={false}
      scroll={{ y: 400 }}
      loading={isFetching}
      dataSource={CVsData}
    />
  )
}

export default ResumesList
