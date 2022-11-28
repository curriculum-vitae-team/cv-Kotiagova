import Search, { SearchProps } from 'antd/lib/input/Search'
import styled from 'styled-components'

export const StyledTableControls = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledSearch: React.FC<SearchProps> = styled(Search)`
  margin-bottom: 10px;
`
