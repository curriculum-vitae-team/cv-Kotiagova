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
  return (
    <Button type={type} icon={icon} block={block} onClick={handler}>
      {text}
    </Button>
  )
}

export default AppButton
