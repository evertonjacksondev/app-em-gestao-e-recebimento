import styled from 'styled-components'

export const Select = styled.select`
  border-radius: 6px;
  width: 200px;
  display: flex;
  align-items: center
  height: 30px;
  border: 1px solid black;
  font-size: 12px;
  margin-top: 18px;
  :hover {
    border: 1px solid #587fa6;
  }
  :focus {
    outline: none;
    border: 1px solid #587fa6;
    box-shadow: 10px 5px 5px #aba6a2;
  }
  option {
    outline: none;
    border: 1px solid #587fa6;
    box-shadow: 10px 5px 5px #aba6a2;
  }
`
