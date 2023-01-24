import React from 'react'

import PasswordInput, { PasswordInputProps } from './PasswordInput'

export default {
  title: 'UI/inputs/PasswordInput',
  component: PasswordInput,
  argTypes: {
    value: {
      type: 'string',
      defaultValue: 'Bubba'
    }
  }
}

const Template = (args: PasswordInputProps) => <PasswordInput {...args} />

export const Default = Template.bind({})

Default.args = {
  borderRadius: 50
}
