import React from 'react'

import Button from '../Elements/Button'
import Paragraph from '../Elements/Paragraph'
import { Icon } from '../Elements/Icon'

const ButtonDefault = props => {
  return (
    <Button {...props}>
      <Icon name={props.icon} />
      <Paragraph>{props.name}</Paragraph>
    </Button>
  )
}

export default ButtonDefault
