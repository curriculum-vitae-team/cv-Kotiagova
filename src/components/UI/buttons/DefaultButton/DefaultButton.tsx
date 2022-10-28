import React, { ReactNode } from 'react'
import { Button } from 'antd'

type BtnProps = {
  text: string
  icon?: ReactNode
  block?: boolean
}

const DefaultButton: React.FC<BtnProps> = (props: BtnProps) => {
  const { text, icon, block } = { ...props }
  if (block) {
    return (
      <Button type='default' icon={icon} block>
        {text}
      </Button>
    )
  } else {
    return (
      <Button type='default' icon={icon}>
        {text}
      </Button>
    )
  }
}

export default DefaultButton
