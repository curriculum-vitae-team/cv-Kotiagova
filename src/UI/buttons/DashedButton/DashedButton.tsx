import React from 'react'
import DefaultButton, { DefaultButtonProps } from '../DefaultButton/DefaultButton'

const DashedButton: React.FC<DefaultButtonProps> = ({ children, ...rest }) => {
  return (
    <DefaultButton {...rest} type='dashed'>
      {children}
    </DefaultButton>
  )
}

export default DashedButton
