import { useSnackbar } from 'notistack'
import React, { Fragment, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ButtonDefault from '../../Components/DesignSystem/Combinations/ButtonDefault'
import TextField from '../../Components/DesignSystem/Combinations/TextField'
import { SectionButton, SectionForm, SectionText } from '../../Components/DesignSystem/Elements/Section'
import { Select } from '../../Components/DesignSystem/Elements/Select'
import NavBar from '../../Components/NavBar/NavBar'
import { deleteResidentId, postResident, putResidentId } from './api'

const ResidentDetails = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({})
  const [disabled, setDisabled] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const { id } = useParams()

  const clearForm = e => {
    e.preventDefault()
    setData({})
    enqueueSnackbar('Formulário Limpo com sucesso', { variant: 'success' })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (id === 'new') {
      postResident(
        data,
        success => {
          enqueueSnackbar('Cadastrado com sucesso!', { variant: 'success' })
          navigate(`/morador/${success._id}`)
        },
        error => {
          enqueueSnackbar(error)
        }
      )
    } else if (data._id) {
      putResidentId(
        data,
        success => {
          enqueueSnackbar('Atualizado com sucesso', { variant: 'success' })
        },
        error => {
          enqueueSnackbar(error)
        }
      )
    }}

  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target

    setData(current => {
      return {
        ...current,
        [name]: value,
      }
    })
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

      </SectionText>
      <SectionText>
        <TextField
          key='document'
          name='document'
          label='CPF:'
          value={data.document}
          onChange={handleChange}
        />

        <TextField
          key='phonenumber'
          name='phonenumber'
          label='Telefone:'
          value={data.phonenumber}
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
          icon={'clear'}
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
