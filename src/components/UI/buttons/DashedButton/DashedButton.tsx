import React, { ReactNode } from 'react'
import { Button } from 'antd'

type ButtonProps = {
  text: string
  icon?: ReactNode
  block?: boolean
}

const DashedButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { text, icon, block } = { ...props }
  if (block) {
    return (
      <Button type='dashed' icon={icon} block>
        {text}
      </Button>
    )
  } else {
    return (
      <Button type='dashed' icon={icon}>
        {text}
      </Button>
    )
  }
}

export default DashedButton
