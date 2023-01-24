import React from 'react'
import DefaultButton, { DefaultButtonProps } from '../DefaultButton/DefaultButton'

const PrimaryButton: React.FC<DefaultButtonProps> = ({ children, ...rest }) => {
  return (
    <DefaultButton {...rest} type='primary' style={{ borderRadius: '50px' }}>
      {children}
    </DefaultButton>
  )
}

export default PrimaryButton
