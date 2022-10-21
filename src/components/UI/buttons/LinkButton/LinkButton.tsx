import React, { ReactNode } from 'react'
import { Button } from 'antd'

type ButtonProps = {
  text: string
  icon?: ReactNode
  block?: boolean
}

const LinkButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { text, icon, block } = { ...props }
  if (block) {
    return (
      <Button type='link' icon={icon} block>
        {text}
      </Button>
    )
  } else {
    return (
      <Button type='link' icon={icon}>
        {text}
      </Button>
    )
  }
}

export default LinkButton
