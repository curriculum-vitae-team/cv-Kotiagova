import React from 'react'

import SelectInput, { SelectInputProps } from './SelectInput'

export default {
  title: 'UI/inputs/SelectInput',
  component: SelectInput,
  argTypes: {
    value: {
      type: 'string',
      defaultValue: 'Bubba'
    }
  }
}

const Template = (args: SelectInputProps) => <SelectInput {...args} />

export const Default = Template.bind({})

Default.args = {
  borderRadius: 50
}
