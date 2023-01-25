import { Select } from 'antd'

import styled from 'styled-components'

type StyledSelectProps = {
  borderRadius: number
}

export const StyledSelect = styled(Select)<StyledSelectProps>`
  .ant-select-selector {
    border-radius: ${(props) => props.borderRadius + 'px'} !important;
  }
`
