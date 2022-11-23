import { Button, ButtonProps } from 'antd'
import styled from 'styled-components'

export const ExpandedRow = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const UpdateButton: React.FC<ButtonProps> = styled(Button)`
  margin-right: 10px;
`
