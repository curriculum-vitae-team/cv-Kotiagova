import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 14.888vw;
  display: flex;
  flex-direction: column;
  span {
    color: red;
  }
  label {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 183%;
    color: rgba(0, 0, 0, 0.85);
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`
