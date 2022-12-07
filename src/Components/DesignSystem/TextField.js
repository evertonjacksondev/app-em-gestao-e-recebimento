import React, { Fragment } from 'react'
import 'material-icons/iconfont/material-icons.css'
import { Label } from './Label'
import { Input } from './Input'

const TextField = props => {
  const {
    value,
    label,
    dataRef,
    required = false,
    name = 'Salvar',
    type = 'text',
    onChange,
    ...others
  } = props

  return (
    <Fragment>
      <Label>{required ? label + ' *' : label}</Label>
      <Input
        ref={dataRef}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        {...others}
      />
    </Fragment>
  )
}

export default TextField
