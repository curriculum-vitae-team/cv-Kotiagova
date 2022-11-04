import React from 'react'
import { Table } from 'antd'

type TableProps = {
  data: Array<object>
}

const RecordTable: React.FC<TableProps> = (props: TableProps) => {
  const { data } = { ...props }
  const columns = []
  for (const key in data[0]) {
    columns.push({
      title: key[0].toUpperCase() + key.slice(1),
      dataIndex: key,
      key: key
    })
  }
  return <Table dataSource={data} columns={columns}></Table>
}

export default RecordTable
