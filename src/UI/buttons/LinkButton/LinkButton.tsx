import React from 'react'

import DefaultButton, { DefaultButtonProps } from '../DefaultButton/DefaultButton'

const LinkButton: React.FC<DefaultButtonProps> = ({ children, ...rest }) => {
  return (
    <DefaultButton {...rest} type='link'>
      {children}
    </DefaultButton>
  )
}

export default LinkButton
