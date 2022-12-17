import { useSnackbar } from 'notistack'
import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ButtonDefault from '../../Components/DesignSystem/Combinations/ButtonDefault'
import TextField from '../../Components/DesignSystem/Combinations/TextField'
import {
  SectionButton,
  SectionForm,
  SectionText
} from '../../Components/DesignSystem/Elements/Section'
import NavBar from '../../Components/NavBar/NavBar'
import {
  deleteResidentId,
  getResidentId,
  postResident,
  putResident
} from './api'

const ResidentDetails = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const [data, setData] = useState({ status: 'Nenhum' })
  const [disabled, setDisabled] = useState(false)
  const { id } = useParams()

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
    if (id != 'new') {
      getResidentId(
        id,
        success => {
          setData(success)
        },
        error => {}
      )
    }
  }, [])

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    let requiredFields = ['name', 'torre', 'phoneNumber', 'numero', 'document']

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

  const handleSubmit = e => {
    e.preventDefault()

    if (id == 'new') {
      postResident(
        data,
        success => {
          enqueueSnackbar('Criado com sucesso!', { variant: 'success' })
          navigate(`/morador/${success._id}`)
        },
        error => {
          enqueueSnackbar(error)
        }
      )
    } else if (id != 'new') {
      putResident(
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

  const handleDelete = e => {
    e.preventDefault()
    deleteResidentId(
      id,
      success => {
        enqueueSnackbar('Deletado com sucesso!', { variant: 'success' })
        navigate(`/morador`)
      },
      error => {
        enqueueSnackbar(
          'Erro ao deletar, comunicar o administrador da pagina',
          { variant: 'error' }
        )
      }
    )
  }

  const clearForm = e => {
    e.preventDefault()
    setData({ status: 'Nenhum' })
    validate()
    enqueueSnackbar('Formulário Limpo com sucesso', { variant: 'success' })
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
            label='Número:'
            value={data.numero}
            onChange={handleChange}
          />
        </SectionText>
        <SectionText>
          <TextField
            key='phoneNumber'
            name='phoneNumber'
            type='number'
            min='0'
            label='Telefone:'
            value={data.phoneNumber}
            onChange={handleChange}
          />

          <TextField
            key='document'
            name='document'
            label='CPF:'
            value={data.document}
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
              navigate('/morador')
            }}
            icon={'arrow_back'}
          />
        </SectionButton>
      </SectionForm>
    </Fragment>
  )
}

export default ResidentDetails
