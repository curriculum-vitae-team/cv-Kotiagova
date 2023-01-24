import React, { useEffect } from 'react'

import { Checkbox, Form, Modal } from 'antd'

import useAddResume from '@/pages/EmployeePage/components/CVs/hooks/useAddResume'

import { useOptions } from './hooks/useOptions'

import CascadingList from './components/CascadingList/CascadingList'

import { StyledSpin } from './NewResumeModal.style'

import PrimaryButton from '@/UI/buttons/PrimaryButton/PrimaryButton'
import DefaultInput from '@/UI/inputs/DefaultInput/DefaultInput'
import SelectInput from '@/UI/inputs/SelectInput/SelectInput'
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
          <DefaultInput required placeholder='Name' />
        </Form.Item>
        <Form.Item name='description'>
          <DefaultInput required placeholder='Description' />
        </Form.Item>
        <Form.Item name='projectsIds'>
          <SelectInput mode='multiple' placeholder='Projects' options={projectOptions} />
        </Form.Item>
        <CascadingList options={languageOptions} name='languages' />
        <CascadingList options={skillOptions} name='skills' />
        <Form.Item name='is_template' valuePropName='checked'>
          <Checkbox>Is Template?</Checkbox>
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

export default NewResumeModal
