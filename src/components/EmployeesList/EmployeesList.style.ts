import styled from 'styled-components'

import DefaultButton from '@/UI/buttons/DefaultButton/DefaultButton'
import LinkButton from '@/UI/buttons/LinkButton/LinkButton'

export const ExpandedRow = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const UpdateButton = styled(DefaultButton)`
  margin-right: 10px;
`

export const StyledLinkButton = styled(LinkButton)`
  margin-right: 10px;
`
