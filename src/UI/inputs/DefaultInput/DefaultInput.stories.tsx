import React from 'react'

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
  borderRadius: 50
}
