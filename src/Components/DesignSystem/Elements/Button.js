import styled from 'styled-components'
import 'material-icons/iconfont/material-icons.css'

const Button = styled.button`
  background: ${props => (props.background ? props.background : '#587FA6')};
  color: black;
  border: 1px solid #587fa6;
  border-radius: 7px;
  width: 150px;
  margin: 5px;
  height: 35px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    box-shadow: 0 0 5px #808080;
    color: white;
  }
  :disabled {
    background-color: dimgrey;
    color: linen;
    opacity: 1;
  }
`

export default Button
