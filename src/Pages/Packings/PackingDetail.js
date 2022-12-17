import React, { Fragment, useEffect, useState } from 'react'

import ButtonDefault from '../../Components/DesignSystem/Combinations/ButtonDefault'
import TextField from '../../Components/DesignSystem/Combinations/TextField'
import {
  SectionButton,
  SectionForm,
  SectionText
} from '../../Components/DesignSystem/Elements/Section'
import { getPackingId, postPacking, deletePackingId, putPackingId } from './api'
import { useSnackbar } from 'notistack'
import { Select } from '../../Components/DesignSystem/Elements/Select'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'
import { getResident } from '../Resident/api'

const PackingDetail = () => {
  const [data, setData] = useState({ status: 'Nenhum' })
  const [residents, setResidents] = useState({})
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const [disabled, setDisabled] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    if (id != 'new') {
      getPackingId(
        id,
        success => {
          setData(success)
        },
        error => {}
      )
    }

    getResident(
      sucess => {
        setResidents(sucess)
      },
      err => {}
    )
  }, [])

  const sendMessage = data => {
    window.open(
      `https://api.whatsapp.com/send?phone=5511997831826&text=*Olá%20${data.name}!*%0aSua%20Encomenda%20Chegou!%0aEstá%20disponivel%20para%20realizar%20a%20retira%20na%20recepção`
    )
  }

  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target

    setData(current => {
      return {
        ...current,
        [name]: value != 'Nenhum' ? value : ''
      }
    })
    validate()
  }

  useEffect(() => {
    validate()
  }, [data])
  const handleDelete = e => {
    e.preventDefault()
    deletePackingId(
      id,
      success => {
        enqueueSnackbar('Deletado com sucesso!', { variant: 'success' })
        navigate(`/encomenda`)
      },
      error => {
        enqueueSnackbar(
          'Erro ao deletar, comunicar o administrador da pagina',
          { variant: 'error' }
        )
      }
    )
  }

  const validate = () => {
    let requiredFields = [
      'name',
      'torre',
      'numero',
      'status',
      'type',
      'cadastradoPor'
    ]

    let fieldsValidate = []
    for (let requiredField of requiredFields) {
      if (data[requiredField] && data[requiredField] != '') {
        fieldsValidate.push(requiredField)
      }
    }
    if (fieldsValidate.length == requiredFields.length) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  const clearForm = e => {
    e.preventDefault()
    setData({ status: 'Nenhum' })
    validate()
    enqueueSnackbar('Formulário Limpo com sucesso', { variant: 'success' })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (id == 'new') {
      postPacking(
        data,
        success => {
          sendMessage(success)
          enqueueSnackbar('Criado com sucesso!', { variant: 'success' })
          navigate(`/encomenda/${success._id}`)
        },
        error => {
          enqueueSnackbar(error)
        }
      )
    } else if (data._id) {
      putPackingId(
        data,
        success => {
          enqueueSnackbar('Atualizado com sucesso', { variant: 'success' })
        },
        error => {
          enqueueSnackbar(error)
        }
      )
    }
  }

  return (
    <Fragment>
      <NavBar />
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
            min='0'
            label='Número:'
            value={data.numero}
            onChange={handleChange}
          />

          {data._id && (
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
            <option value='Status'>Nenhum</option>
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
            disabled={!disabled}
            onClick={handleSubmit}
            icon={'save'}
          />
          <ButtonDefault
            name='Limpar'
            disabled={Object.values(data).length == 0}
            onClick={clearForm}
            icon={'clear_all'}
          />
          {id !== 'new' && (
            <ButtonDefault
              onClick={handleDelete}
              name='Excluir'
              icon={'delete'}
            />
          )}
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
