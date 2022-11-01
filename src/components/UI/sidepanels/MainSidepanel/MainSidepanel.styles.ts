import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 14.444vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;

  .ant-menu-vertical {
    height: 100%;

    li:last-child {
      position: relative;
      top: 66vh;
    }
  }
`
