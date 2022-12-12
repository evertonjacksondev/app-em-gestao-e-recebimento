import styled from 'styled-components'

export const Input = styled.input`
  border-radius: 6px;
  width: 200px;
  display: flex;
  height: 30px;
  border: 1px solid black;
  font-size: 12px;
  :hover {
    border: 1px solid #587fa6;
  }
  :focus {
    outline: none;
    border: 1px solid #587fa6;
    box-shadow: 10px 5px 5px #aba6a2;
    transition: all 0.6s ease-in-out;
  }
`
