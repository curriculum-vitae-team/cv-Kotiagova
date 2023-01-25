import React from 'react'

import { DEFAULT_BORDER_RADIUS } from '../../constants'
import { DefaultButtonProps } from '../DefaultButton/DefaultButton'
import LinkButton from './LinkButton'

export default {
  title: 'UI/buttons/LinkButton',
  component: LinkButton,
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

const Template = (args: DefaultButtonProps) => <LinkButton {...args} />

export const Default = Template.bind({})

Default.args = {
  icon: null
}
