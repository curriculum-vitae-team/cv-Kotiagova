import React from 'react'
import 'antd/dist/antd.css'
import RecordTable from './RecordTable'

export default {
  title: 'UI/table/RecordTable',
  component: RecordTable,
  argTypes: {
    data: {
      type: 'any[]',
      defaultValue: [
        { name: 'Anna', surname: 'Kotyagova', age: 19 },
        { name: 'Oxana', surname: 'Kotova', age: 18 },
        { name: 'Evgeniy', surname: 'Lorov', age: 19 }
      ]
    }
  }
}

const Template = (arg) => <RecordTable {...arg} />

export const Default = Template.bind({})
