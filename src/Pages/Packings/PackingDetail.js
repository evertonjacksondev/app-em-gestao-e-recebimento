import React, { useState } from 'react'

import ButtonDefault from '../../Components/DesignSystem/Combinations/ButtonDefault'
import TextField from '../../Components/DesignSystem/Combinations/TextField'
import {
  SectionButton,
  SectionForm,
  SectionText
} from '../../Components/DesignSystem/Elements/Section'
import { postPacking } from './api'
import { useSnackbar } from 'notistack'
import { Select } from '../../Components/DesignSystem/Elements/Select'

const PackingDetail = () => {
  const [data, setData] = useState({})
  const { enqueueSnackbar } = useSnackbar()
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
    postPacking(
      data,
      success => {
        enqueueSnackbar(success)
      },
      error => {
        enqueueSnackbar(error)
      }
    )
  }

  return (
    <SectionForm onSubmit={handleSubmit}>
      <SectionText>
        <TextField
          key='name'
          name='name'
          label='Nome:'
          value={data.name}
          onChange={handleChange}
        />
        <TextField
          key='torre'
          name='torre'
          label='Torre:'
          value={data.torre}
          onChange={handleChange}
        />
        <TextField
          key='number'
          name='number'
          label='Número:'
          value={data.number}
          onChange={handleChange}
        />
      </SectionText>
      <SectionText>
        <Select
          key='status'
          name='status'
          label='Status:'
          value={data.status}
          onChange={handleChange}
        >
          <option value='Pendente'>Pendente</option>
          <option value='Retirado'>Retirado</option>
        </Select>
        <TextField
          key='type'
          name='type'
          label='Tipo:'
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
      </SectionText>
      <SectionButton>
        <ButtonDefault name='Salvar' />
        <ButtonDefault name='Limpar' />
        <ButtonDefault name='Excluir' />
      </SectionButton>
    </SectionForm>
  )
}

export default PackingDetail
