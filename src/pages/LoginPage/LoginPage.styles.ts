import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25vw;

  h1 {
    font-size: 35px;
    width: 100%;
    text-align: center;
    letter-spacing: 0.2rem;
  }

  div {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  background: #f0f2f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  //font-family: 'Roboto', sans-serif;
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
