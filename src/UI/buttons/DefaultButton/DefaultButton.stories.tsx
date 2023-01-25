import React from 'react'

import { DEFAULT_BORDER_RADIUS } from '../../constants'
import DefaultButton, { DefaultButtonProps } from './DefaultButton'

export default {
  title: 'UI/buttons/DefaultButton',
  component: DefaultButton,
  argTypes: {
    borderRadius: {
      type: 'number',
      defaultValue: DEFAULT_BORDER_RADIUS
    },
    children: {
      type: 'ReactNode',
      defaultValue: 'Da best button'
    },
    block: {
      type: 'boolean',
      description: 'Button stretches according to its parent width',
      defaultValue: false
    }
  }
}

const Template = (args: DefaultButtonProps) => <DefaultButton {...args} />

export const Default = Template.bind({})

Default.args = {
  icon: null
}
