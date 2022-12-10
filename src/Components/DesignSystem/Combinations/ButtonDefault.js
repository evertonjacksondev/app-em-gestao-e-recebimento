import React from 'react'
import 'material-icons/iconfont/material-icons.css'
import Button from '../Elements/Button'
import Paragraph from '../Elements/Paragraph'

const ButtonDefault = props => {
  return (
    <Button {...props}>
      <i class='material-icons'>{props.icon ? props.icon : ''}</i>
      <Paragraph>{props.name}</Paragraph>
    </Button>
  )
}

export default ButtonDefault
