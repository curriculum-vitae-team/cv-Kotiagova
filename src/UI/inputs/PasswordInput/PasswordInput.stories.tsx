import React from 'react'

import { DEFAULT_BORDER_RADIUS } from '../../constants'
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
  defaultValue: DEFAULT_BORDER_RADIUS
}
