import React, { ChangeEventHandler } from 'react'
import { Input } from 'antd'
import { Wrapper } from '../AppInput/AppInput.styles'
const { TextArea } = Input

type InputProps = {
  label: string
  placeholder?: string
  status?: '' | 'error'
  onChange?: ChangeEventHandler
}

const AppTextarea: React.FC<InputProps> = (props: InputProps) => {
  const { label, placeholder, status, onChange } = { ...props }
  return (
    <Wrapper>
      <label>
        {label}
        <span> {status ? '*' : ''}</span>
        {/*//TODO: resize???*/}
        <TextArea
          style={{ resize: 'none' }}
          placeholder={placeholder}
          status={status}
          onChange={onChange}
        />
        <span> {status ? 'Please, specify the field' : ''}</span>
      </label>
    </Wrapper>
  )
}

export default AppTextarea
