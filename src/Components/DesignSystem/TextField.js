import React, { Fragment } from 'react'
import styled from 'styled-components'
import 'material-icons/iconfont/material-icons.css'

const TextField = props => {
  const { required = true, name = 'Salvar', type = 'text' } = props

  const Label = styled.label`
    font-size: 12px;
    display: flex;
    padding-left: 2px;
  `

  const TextField = styled.input`
    border-radius: 6px;
    width: 200px;
    height: 30px;
    border: 1px solid black;
    font-size: 12px;
    :hover {
      border: 1px solid #587fa6;
    }
    :focus {
      outline:none;
      border: 1px solid #587fa6;
      box-shadow: 10px 5px 5px #ABA6A2;
    }
  `




  return (
    <Fragment>
      <Label for='input'>{required ? name + ' *' : name}</Label>
      <TextField type={type} id='input'></TextField>
    </Fragment>
  )
}

export default TextField
