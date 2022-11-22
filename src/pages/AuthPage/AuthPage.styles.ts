import styled from 'styled-components'
import 'antd/dist/antd.css'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 1 360px;
  margin: 0 20px;

  h1 {
    font-size: 35px;
    width: 100%;
    text-align: center;
    letter-spacing: 0.2rem;
  }

  div {
    width: 100%;
  }

  @media (max-width: 300px) {
    h1 {
      font-size: 30px;
    }
  }
`

export const Wrapper = styled.div`
  background: #f0f2f5;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const QuestionBtn = styled.button`
  position: fixed;
  bottom: 42px;
  right: 77px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding-top: 4px;
  background: #ffffff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  div > svg {
    height: 16px;
    width: 12px;
  }

  @media (max-width: 400px) {
    bottom: 32px;
    right: 47px;
  }
`
export const LanguageBtn = styled.button`
  position: fixed;
  top: 19px;
  right: 23px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  div > svg {
    height: 18px;
    width: 18px;
  }
`
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 23px;

  label {
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      margin-right: 8px;
      cursor: pointer;
    }
  }
  button {
    margin-right: -15px;
  }
`

export const TabsContainer = styled.div`
  .ant-tabs-nav-list {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
