import React, { Fragment, useState } from 'react'

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
import { useNavigate, useParams } from 'react-router-dom'

const PackingDetail = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const { id } = useParams()

  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setData(current => {
      return {
        ...current,
        [name]: value !== 'Status' ? value : ''
      }
    })
  }

  const clearForm = e => {
    e.preventDefault()
    setData({})
    enqueueSnackbar('Formulário Limpo com sucesso', { variant: 'success' })
  }

  const handleSubmit = e => {
    e.preventDefault()
    postPacking(
      data,
      success => {
        enqueueSnackbar('Criado com sucesso!', { variant: 'success' })
      },
      error => {
        enqueueSnackbar(error)
      }
    )
  }

  return (
    <Fragment>
      <SectionForm>
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
            key='numero'
            name='numero'
            type='number'
            min="0"
            label='Número:'
            value={data.numero}
            onChange={handleChange}
          />

          {id !== 'new' && (
            <TextField
              key='withDrawn'
              name='withDrawn'
              label='Retirado Por:'
              value={data.withDrawn}
              onChange={handleChange}
            />
          )}
        </SectionText>
        <SectionText>
          <Select
            key='status'
            name='status'
            label='Status:'
            value={data.status}
            onChange={handleChange}
          >
            <option>Status</option>
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
            name='cadastradoPor'
            label='Cadastrado Por:'
            value={data.cadastradoPor}
            onChange={handleChange}
          />
        </SectionText>
        <SectionButton>
          <ButtonDefault
            name='Salvar'
            disabled={
              Object.values(data).filter(value => value !== '').length !== 6
            }
            onClick={handleSubmit}
            icon={'save'}
          />
          <ButtonDefault
            name='Limpar'
            disabled={Object.values(data).length == 0}
            onClick={clearForm}
            icon={'clear'}
          />
          {id !== 'new' && <ButtonDefault name='Excluir' icon={'delete'} />}
          <ButtonDefault
            name='Voltar'
            onClick={() => {
              navigate('/encomenda')
            }}
            icon={'arrow_back'}
          />
        </SectionButton>
      </SectionForm>
    </Fragment>
  )
}

export default PackingDetail
