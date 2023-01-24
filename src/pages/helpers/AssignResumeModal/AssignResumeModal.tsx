import React, { useEffect, useState } from 'react'

import { Form, Modal } from 'antd'

import useGetResumes from '@/pages/EmployeePage/components/CVs/hooks/useGetResumes'
import PrimaryButton from '@/UI/buttons/PrimaryButton/PrimaryButton'
import SelectInput from '@/UI/inputs/SelectInput/SelectInput'

type AssignResumeModalProps = {
  employeeId: string
  toggleOpen: () => void
  isAssignResumeModalOpen: boolean
  bindResume: (cvInput: CV, userId: string) => void
}

const AssignResumeModal: React.FC<AssignResumeModalProps> = ({
  bindResume,
  toggleOpen,
  employeeId,
  isAssignResumeModalOpen
}) => {
  const [form] = Form.useForm()
  const { resumes, getResumes } = useGetResumes()
  const [CVId, setCVId] = useState('')

  const options = resumes.map((cv: CV) => ({
    value: cv.id,
    label: cv.name
  }))

  const handleSubmit = () => {
    toggleOpen()
    bindResume(resumes.filter((i: CV) => i.id === CVId)[0], employeeId)
  }

  const handleSelect = (value: string) => {
    setCVId(value)
  }

  const isSubmitButtonDisabled = CVId === ''

  useEffect(() => {
    getResumes()
  }, [])

  return (
    <Modal
      title='Assign a resume'
      centered
      open={isAssignResumeModalOpen}
      onCancel={toggleOpen}
      footer={null}
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name='cv' required>
          <SelectInput
            onChange={handleSelect}
            defaultActiveFirstOption
            value={CVId}
            options={options}
          />
        </Form.Item>
        <PrimaryButton htmlType='submit' block disabled={isSubmitButtonDisabled}>
          Submit
        </PrimaryButton>
      </Form>
    </Modal>
  )
}

export default AssignResumeModal
