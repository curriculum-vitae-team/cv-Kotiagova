import React from 'react'

import { Button, Cascader, Form } from 'antd'

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
              <Button type='primary' onClick={() => remove(field.name)}>
                Remove
              </Button>
            </StyledSpace>
          ))}
          <Form.Item>
            <Button type='dashed' onClick={() => add()} block>
              Add {name}
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  )
}

export default CascadingList
