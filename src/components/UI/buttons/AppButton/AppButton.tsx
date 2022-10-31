import React, { MouseEventHandler, ReactNode } from 'react'
import { Button } from 'antd'

type BtnProps = {
  type: 'dashed' | 'default' | 'link' | 'primary'
  text: string
  icon?: ReactNode
  block?: boolean
  handler?: MouseEventHandler
}

const AppButton: React.FC<BtnProps> = (props: BtnProps) => {
  const { type, text, icon, block, handler } = { ...props }
  if (block) {
    return (
      <Button type={type} icon={icon} block onClick={handler}>
        {text}
      </Button>
    )
  } else {
    return (
      <Button type={type} icon={icon} onClick={handler}>
        {text}
      </Button>
    )
  }
}

export default AppButton
