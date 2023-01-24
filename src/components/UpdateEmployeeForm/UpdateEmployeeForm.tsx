import React from 'react'

import { Form } from 'antd'

import PrimaryButton from '@/UI/buttons/PrimaryButton/PrimaryButton'
import DefaultInput from '@/UI/inputs/DefaultInput/DefaultInput'
import SelectInput from '@/UI/inputs/SelectInput/SelectInput'
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
        <DefaultInput placeholder='First Name' readOnly={!canEdit} />
      </Form.Item>
      <Form.Item name='last_name'>
        <DefaultInput placeholder='Last Name' readOnly={!canEdit} />
      </Form.Item>
      <Form.Item required name='departmentId'>
        <SelectInput options={departmentOptions} />
      </Form.Item>
      <Form.Item required name='positionId'>
        <SelectInput options={positionOptions} />
      </Form.Item>
      {canEdit && (
        <PrimaryButton block htmlType='submit'>
          Submit
        </PrimaryButton>
      )}
    </Form>
  )
}

export default UpdateEmployeeForm
