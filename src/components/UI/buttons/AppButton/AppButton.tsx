import React, { ReactNode } from 'react'
import { Button } from 'antd'

type BtnProps = {
  type: 'dashed' | 'default' | 'link' | 'primary'
  text: string
  icon?: ReactNode
  block?: boolean
}

const AppButton: React.FC<BtnProps> = (props: BtnProps) => {
  const { type, text, icon, block } = { ...props }
  if (block) {
    return (
      <Button type={type} icon={icon} block>
        {text}
      </Button>
    )
  } else {
    return (
      <Button type={type} icon={icon}>
        {text}
      </Button>
    )
  }
}

export default AppButton
