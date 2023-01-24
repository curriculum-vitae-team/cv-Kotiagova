import { Button, ButtonProps } from 'antd'
import React, { ReactNode } from 'react'

export type DefaultButtonProps = {
  children: ReactNode
  borderRadius?: number
} & ButtonProps

const DefaultButton: React.FC<DefaultButtonProps> = ({ children, borderRadius, ...rest }) => {
  return (
    <Button {...rest} style={{ borderRadius: `${borderRadius || 50}px` }}>
      {children}
    </Button>
  )
}

export default DefaultButton
