import React, { useEffect } from 'react'

import { Button, Checkbox, Form, Input, Modal, Select } from 'antd'

import useAddResume from '@/pages/EmployeePage/components/CVs/hooks/useAddResume'

import { useOptions } from './hooks/useOptions'

import CascadingList from './components/CascadingList/CascadingList'

import { StyledSpin } from './NewResumeModal.style'

import { NewResumeFormValues } from './types'

type NewResumeModalProps = {
  toggleOpen: () => void
  isNewResumeModalOpen: boolean
}

const NewResumeModal: React.FC<NewResumeModalProps> = ({ isNewResumeModalOpen, toggleOpen }) => {
  const { addResume, isFetching } = useAddResume()
  const [form] = Form.useForm()
  const { skills, languages, projects } = useOptions()

  const languageProficiencies = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']
  const skillProficiencies = ['novice', 'advanced', 'competent', 'proficient', 'expert']
  // these values are hard-coded as there are no queries to get them

  const languageChildren = languageProficiencies.map((proficiency) => ({
    label: proficiency,
    value: proficiency
  }))

  const skillsChildren = skillProficiencies?.map((skill) => ({
    label: skill,
    value: skill
  }))

  const skillOptions = skills?.map((skill) => ({
    value: skill.name,
    label: skill.name,
    children: skillsChildren
  }))

  const languageOptions = languages?.map((language) => ({
    value: language.name,
    label: language.name,
    children: languageChildren
  }))

  const projectOptions = projects?.map((project) => ({
    value: project.id,
    label: project.name
  }))

  const handleSubmit = (values: NewResumeFormValues) => {
    addResume(values, toggleOpen)
  }

  useEffect(() => {
    return () => {
      form.resetFields()
    }
  })

  return (
    <Modal
      centered
      footer={null}
      title='Input CV Info'
      onCancel={toggleOpen}
      open={isNewResumeModalOpen}
    >
      {isFetching && <StyledSpin />}
      <Form form={form} onFinish={handleSubmit} disabled={isFetching}>
        <Form.Item name='name'>
          <Input required placeholder='Name' />
        </Form.Item>
        <Form.Item name='description'>
          <Input required placeholder='Description' />
        </Form.Item>
        <Form.Item name='projectsIds'>
          <Select mode='multiple' placeholder='Projects' options={projectOptions} />
        </Form.Item>
        <CascadingList options={languageOptions} name='languages' />
        <CascadingList options={skillOptions} name='skills' />
        <Form.Item name='is_template' valuePropName='checked'>
          <Checkbox>Is Template?</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default NewResumeModal
