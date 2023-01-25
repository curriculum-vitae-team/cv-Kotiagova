import React from 'react'

import { DEFAULT_BORDER_RADIUS } from '../../constants'
import { DefaultButtonProps } from '../DefaultButton/DefaultButton'
import GhostButton from './GhostButton'

export default {
  title: 'UI/buttons/GhostButton',
  component: GhostButton,
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

const Template = (args: DefaultButtonProps) => <GhostButton {...args} />

export const Default = Template.bind({})

Default.args = {
  icon: null
}
