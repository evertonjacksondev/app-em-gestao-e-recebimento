import React from 'react'
import styled from 'styled-components'

const Button = () => {
  const Button = styled.button({ 
    color: 'black',
    borderRadius: '5px',
    backgroundColor: 'yellow',
    width: '100px',
    height: '30px',
   })
  return (
    <Button>Button</Button>
  )
}

export default Button