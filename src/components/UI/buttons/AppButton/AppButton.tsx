import React, { MouseEventHandler, ReactNode } from 'react'
import { Button } from 'antd'

type BtnProps = {
  type: 'dashed' | 'default' | 'link' | 'primary'
  text: string
  icon?: ReactNode
  block?: boolean
  onClick?: MouseEventHandler
}

const AppButton: React.FC<BtnProps> = (props: BtnProps) => {
  const { type, text, icon, block, onClick } = { ...props }
  return (
    <Button type={type} icon={icon} block={block} onClick={onClick}>
      {text}
    </Button>
  )
}

export default AppButton
