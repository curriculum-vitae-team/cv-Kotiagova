import React from 'react'

import { Cascader, Form } from 'antd'

import DashedButton from '@/UI/buttons/DashedButton/DashedButton'
import PrimaryButton from '@/UI/buttons/PrimaryButton/PrimaryButton'
import { StyledSpace } from '../../NewResumeModal.style'

type CascadingListProps = {
  options: {
    value: string
    label: string
    children: {
      label: string
      value: string
    }[]
  }[]
  name: string
}

const CascadingList: React.FC<CascadingListProps> = ({ options, name }) => {
  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <>
          {fields.map((field) => (
            <StyledSpace key={field.key} align='baseline'>
              <Form.Item {...field} key={`${name}-${field.key}`} name={[field.name, name]}>
                <Cascader defaultOpen options={options} />
              </Form.Item>
              <PrimaryButton onClick={() => remove(field.name)}>Remove</PrimaryButton>
            </StyledSpace>
          ))}
          <Form.Item>
            <DashedButton onClick={() => add()} block>
              Add {name}
            </DashedButton>
          </Form.Item>
        </>
      )}
    </Form.List>
  )
}

export default CascadingList
