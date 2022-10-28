import React, { ReactNode } from 'react'
import { Button } from 'antd'

type BtnProps = {
  text: string
  icon?: ReactNode
  block?: boolean
}

const PrimaryButton: React.FC<BtnProps> = (props: BtnProps) => {
  const { text, icon, block } = { ...props }
  if (block) {
    return (
      <Button type='primary' icon={icon} block>
        {text}
      </Button>
    )
  } else {
    return (
      <Button type='primary' icon={icon}>
        {text}
      </Button>
    )
  }
}

export default PrimaryButton
