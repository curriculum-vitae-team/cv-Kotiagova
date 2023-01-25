import React, { ReactNode } from 'react'

import { Button, ButtonProps } from 'antd'

import { DEFAULT_BORDER_RADIUS } from '../../constants'

export type DefaultButtonProps = {
  children: ReactNode
  borderRadius?: number
} & ButtonProps

const DefaultButton: React.FC<DefaultButtonProps> = ({ children, borderRadius, ...rest }) => {
  return (
    <Button {...rest} style={{ borderRadius: `${borderRadius || DEFAULT_BORDER_RADIUS}px` }}>
      {children}
    </Button>
  )
}

export default DefaultButton
