import React from 'react'
import DefaultButton, { DefaultButtonProps } from '../DefaultButton/DefaultButton'

const LinkButton: React.FC<DefaultButtonProps> = ({ children, ...rest }) => {
  return (
    <DefaultButton {...rest} type='link' style={{ border: '1px solid #000fff' }}>
      {children}
    </DefaultButton>
  )
}

export default LinkButton
