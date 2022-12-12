import styled from 'styled-components'

export const Select = styled.select`
  border-radius: 6px;
  height: 34px;
  width: 200px;
  margin: 2px;
  align-items: center;
  border: 1px solid black;
  font-size: 12px;
  outline: none;
  :hover {
    border: 1px solid #587fa6;
    height: 34px;
    width: 200px;
  }
  :focus {
    outline: none;
    height: 34px;
    width: 200px;
    border: 1px solid #587fa6;
    box-shadow: 10px 5px 5px #aba6a2;
  }
  option {
    height: 34px;
    width: 200px;
    outline: none;
    border: 1px solid #587fa6;
    box-shadow: 10px 5px 5px #aba6a2;
  }
`
