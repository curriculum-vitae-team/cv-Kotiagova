import React from 'react'

import DefaultButton, { DefaultButtonProps } from '../DefaultButton/DefaultButton'

const GhostButton: React.FC<DefaultButtonProps> = ({ children, ...rest }) => {
  return (
    <DefaultButton {...rest} type='ghost'>
      {children}
    </DefaultButton>
  )
}

export default GhostButton
