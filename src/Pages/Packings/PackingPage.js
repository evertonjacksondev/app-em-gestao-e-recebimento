import React, { useRef, useState } from 'react'
import TextField from '../../Components/DesignSystem/TextField'

const PackingsPage = () => {
  const [data, setData] = useState({})
  const dataRef = useRef(null)

  const handleChange = e => {
  
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
        ref={dataRef}
        name='name'
        label='Nome'
        value={data.name}
        onChange={handleChange}
      />
      <input onChange={handleChange} name='name' value={data.name}></input>
      <TextField
        key='torre'
        name='torre'
        ref={dataRef}
        label='Torre'
        value={data.torre}
        onChange={handleChange}
      />
      <TextField
        key='number'
        name='number'
        ref={dataRef}
        label='Número'
        value={data.number}
        onChange={handleChange}
      />
      <TextField
        key='type'
        ref={dataRef}
        name='type'
        label='Tipo'
        value={data.type}
        onChange={handleChange}
      />
      <TextField
        key='createdBy'
        ref={dataRef}
        name='createdBy'
        label='Cadastrado Por:'
        value={data.createdBy}
        onChange={handleChange}
      />
    </form>
  )
}

export default PackingsPage
