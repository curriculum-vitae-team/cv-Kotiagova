import React from 'react'

import { DEFAULT_BORDER_RADIUS } from '../../constants'
import { DefaultButtonProps } from '../DefaultButton/DefaultButton'
import PrimaryButton from './PrimaryButton'

export default {
  title: 'UI/buttons/PrimaryButton',
  component: PrimaryButton,
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

const Template = (args: DefaultButtonProps) => <PrimaryButton {...args} />

export const Default = Template.bind({})

Default.args = {
  icon: null
}
