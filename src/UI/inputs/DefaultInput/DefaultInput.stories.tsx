import React from 'react'

import { DEFAULT_BORDER_RADIUS } from '../../constants'
import DefaultInput, { DefaultInputProps } from './DefaultInput'

export default {
  title: 'UI/inputs/DefaultInput',
  component: DefaultInput,
  argTypes: {
    value: {
      type: 'string',
      defaultValue: 'Bubba'
    }
  }
}

const Template = (args: DefaultInputProps) => <DefaultInput {...args} />

export const Default = Template.bind({})

Default.args = {
  defaultValue: DEFAULT_BORDER_RADIUS
}
