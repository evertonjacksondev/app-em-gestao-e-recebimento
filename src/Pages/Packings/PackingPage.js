import React, { useState } from 'react'
import TextField from '../../Components/DesignSystem/TextField'

const PackingsPage = () => {
  const [data, setData] = useState({})

  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setData(current => {
      return {
        ...current,
        [name]: value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        key='name'
        name='name'
        label='Nome'
        value={data.name}
        onChange={handleChange}
      />
      <TextField
        key='torre'
        name='torre'
        label='Torre'
        value={data.torre}
        onChange={handleChange}
      />
      <TextField
        key='number'
        name='number'
        label='Número'
        value={data.number}
        onChange={handleChange}
      />
      <TextField
        key='type'
        name='type'
        label='Tipo'
        value={data.type}
        onChange={handleChange}
      />
      <TextField
        key='createdBy'
        name='createdBy'
        label='Cadastrado Por:'
        value={data.createdBy}
        onChange={handleChange}
      />
    </form>
  )
}

export default PackingsPage
