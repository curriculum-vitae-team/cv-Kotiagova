import React, { useEffect } from 'react'

import { Button, Form, Input, Select } from 'antd'
import { useOptions } from './hooks/useOptions'

type UpdateEmployeeFormProps = {
  canEdit: boolean
  initialValues: {
    first_name: string
    last_name: string
    departmentId: string
    positionId: string
  }
  handleSubmit: (formValues) => void
}

const UpdateEmployeeForm: React.FC<UpdateEmployeeFormProps> = ({
  canEdit,
  handleSubmit,
  initialValues
}) => {
  const [form] = Form.useForm()

  useEffect(() => {
    return () => form.resetFields()
  })

  const { departments, positions } = useOptions()

  const departmentOptions = departments?.map((department) => ({
    value: department.id,
    label: department.name,
    disabled: !canEdit
  }))

  const positionOptions = positions?.map((positions) => ({
    value: positions.id,
    label: positions.name,
    disabled: !canEdit
  }))

  return (
    <Form form={form} initialValues={initialValues} onFinish={handleSubmit}>
      <Form.Item name='first_name'>
        <Input placeholder='First Name' readOnly={!canEdit} />
      </Form.Item>
      <Form.Item name='last_name'>
        <Input placeholder='Last Name' readOnly={!canEdit} />
      </Form.Item>
      <Form.Item required name='departmentId'>
        <Select defaultActiveFirstOption options={departmentOptions} />
      </Form.Item>
      <Form.Item required name='positionId'>
        <Select defaultActiveFirstOption options={positionOptions} />
      </Form.Item>
      {canEdit && (
        <Button block type='primary' htmlType='submit'>
          Submit
        </Button>
      )}
    </Form>
  )
}

export default UpdateEmployeeForm
