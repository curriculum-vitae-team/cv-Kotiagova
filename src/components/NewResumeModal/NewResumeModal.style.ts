import { Cascader, Space, Spin } from 'antd'
import styled from 'styled-components'

export const StyledSpin = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`

export const StyledSpace = styled(Space)`
  display: flex;
`

export const StyledCascader = styled(Cascader)`
  width: 100%;
`
