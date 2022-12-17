import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonDefault from '../../Components/DesignSystem/Combinations/ButtonDefault'
import Table from '../../Components/DesignSystem/Combinations/Table'
import TextField from '../../Components/DesignSystem/Combinations/TextField'
import { SectionText } from '../../Components/DesignSystem/Elements/Section'
import NavBar from '../../Components/NavBar/NavBar'
import { getResident } from './api'

const ResidentPage = () => {
  const { enqueueSnackbar } = useSnackbar()
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const [filter, setFilter] = useState({})
  const navPage = path => {
    navigate(path)
  }

  const columns = [
    { path: 'name', name: 'Nome' },
    { path: 'phoneNumber', name: 'Telefone' },
    { path: 'document', name: 'CPF' },
    { path: 'torre', name: 'Torre' },
    { path: 'numero', name: 'Número Apartamento' },
    { path: 'button', name: '' }
  ]

  const clearForm = () => {
    getGridData()
    setFilter({})
    enqueueSnackbar('Filtro Resetado')
  }
  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setFilter(filterCurrent => {
      return { ...filterCurrent, [name]: value }
    })
  }
  const handleFilter = () => {
    setData(data.filter(f => Object.values(f).includes(filter.filterId)))
  }
  const getGridData = () => {
    getResident(
      sucess => {
        setData(sucess)
      },
      err => {}
    )
  }

  useEffect(() => {
    getGridData()
  }, [])
  return (
    <div>
      <NavBar />

      <SectionText>
        <TextField
          name='filterId'
          value={filter.filterId}
          label={'Pesquisar...'}
          onChange={handleChange}
        />

        <ButtonDefault
          disabled={
            !Object.values(filter).filter(filters => filters != '').length > 0
          }
          icon={'sync'}
          onClick={() => handleFilter()}
        />
        <ButtonDefault
          name={'Limpar Filtro'}
          icon={'clear_all'}
          onClick={clearForm}
          disabled={
            !Object.values(filter).filter(filters => filters != '').length > 0
          }
        />
        <ButtonDefault
          name={'Nova Morador'}
          icon={'add'}
          onClick={() => navPage('/morador/new')}
        />
      </SectionText>

      <Table pathname={'morador'} columns={columns} data={data} />
    </div>
  )
}

export default ResidentPage
