import React from 'react'

import { DEFAULT_BORDER_RADIUS } from '../../constants'
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
  defaultValue: DEFAULT_BORDER_RADIUS
}
