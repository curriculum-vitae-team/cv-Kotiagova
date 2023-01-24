import React, { useEffect } from 'react'

import { Form, Modal } from 'antd'

import { useOptions } from '../UpdateEmployeeForm/hooks/useOptions'

import { AddEmployeeFormValues } from '@/pages/EmployeesPage/types'
import PrimaryButton from '@/UI/buttons/PrimaryButton/PrimaryButton'
import DefaultInput from '@/UI/inputs/DefaultInput/DefaultInput'
import PasswordInput from '@/UI/inputs/PasswordInput/PasswordInput'
import SelectInput from '@/UI/inputs/SelectInput/SelectInput'

type NewEmployeeModalProps = {
  isNewEmployeeModalOpen: boolean
  setIsNewEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  addEmployee: (values: AddEmployeeFormValues) => void
}

const NewEmployeeModal: React.FC<NewEmployeeModalProps> = ({
  isNewEmployeeModalOpen,
  setIsNewEmployeeModalOpen,
  addEmployee
}) => {
  const [form] = Form.useForm()
  const { departments, positions } = useOptions()

  useEffect(() => {
    return () => {
      form.resetFields()
    }
  })

  const handleSubmit = (values: AddEmployeeFormValues) => {
    addEmployee(values)
  }

  const departmentOptions = departments?.map((department) => ({
    value: department.id,
    label: department.name
  }))

  const positionOptions = positions?.map((positions) => ({
    value: positions.id,
    label: positions.name
  }))

  return (
    <Modal
      title='Input Employee Info'
      centered
      open={isNewEmployeeModalOpen}
      footer={null}
      onCancel={() => setIsNewEmployeeModalOpen(false)}
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name='first_name'>
          <DefaultInput placeholder={'First Name'} />
        </Form.Item>
        <Form.Item name='last_name'>
          <DefaultInput placeholder={'Last Name'} />
        </Form.Item>
        <Form.Item name='email'>
          <DefaultInput required placeholder={'Email'} type='email' />
        </Form.Item>
        <Form.Item name='password'>
          <PasswordInput />
        </Form.Item>
        <Form.Item name='department_id'>
          <SelectInput options={departmentOptions} />
        </Form.Item>
        <Form.Item name='position_id'>
          <SelectInput options={positionOptions} />
        </Form.Item>
        <Form.Item>
          <PrimaryButton block htmlType='submit'>
            Submit
          </PrimaryButton>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default NewEmployeeModal
