import React from 'react'
import styled from 'styled-components'
import 'material-icons/iconfont/material-icons.css'
import { Button } from './Button'

const Paragraph = styled.p`
  margin: 5px;
`
const ButtonDefault = props => {
  const {
    name = 'Salvar',
    background = '#587FA6',
    icon = 'close',
    ...others
  } = props

  return (
    <Button {...others}>
      <i class='material-icons'>{icon}</i>
      <Paragraph>{name}</Paragraph>
    </Button>
  )
}

export default ButtonDefault
