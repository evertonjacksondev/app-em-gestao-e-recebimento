import React from 'react'
import 'material-icons/iconfont/material-icons.css'
import { Label } from '../Elements/Label'
import { Input } from '../Elements/Input'
import { SectionInput } from '../Elements/Section'

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
    <SectionInput>
      <Label>{required ? label + ' *' : label}</Label>
      <Input
        ref={dataRef}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        {...others}
      />
    </SectionInput>
  )
}

export default TextField
