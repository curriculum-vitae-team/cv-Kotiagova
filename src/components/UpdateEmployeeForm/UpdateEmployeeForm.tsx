import React from 'react'

import { Button, Form, Input, Select } from 'antd'

import { InitialValues, UpdateEmployeeFormValues } from './types'

type UpdateEmployeeFormProps = {
  canEdit: boolean
  positions: Position[]
  departments: Department[]
  initialValues: InitialValues
  handleSubmit: (formValues: UpdateEmployeeFormValues) => void
}

const UpdateEmployeeForm: React.FC<UpdateEmployeeFormProps> = ({
  canEdit,
  positions,
  departments,
  handleSubmit,
  initialValues
}) => {
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
    <Form initialValues={initialValues} onFinish={handleSubmit}>
      <Form.Item name='first_name'>
        <Input placeholder='First Name' readOnly={!canEdit} />
      </Form.Item>
      <Form.Item name='last_name'>
        <Input placeholder='Last Name' readOnly={!canEdit} />
      </Form.Item>
      <Form.Item required name='departmentId'>
        <Select options={departmentOptions} />
      </Form.Item>
      <Form.Item required name='positionId'>
        <Select options={positionOptions} />
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
