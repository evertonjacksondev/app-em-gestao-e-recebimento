import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import { Fragment, React } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonDefault from '../../Components/DesignSystem/Combinations/ButtonDefault'
import Table from '../../Components/DesignSystem/Combinations/Table'
import TextField from '../../Components/DesignSystem/Combinations/TextField'
import {
  SectionButtonPacking,
  SectionFilter,
  SectionText
} from '../../Components/DesignSystem/Elements/Section'
import NavBar from '../../Components/NavBar/NavBar'
import { getPacking } from './api'

const PackingPage = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState({})
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  const navPage = path => {
    navigate(path)
  }

  const handleFilter = () => {
    setData(data.filter(f => Object.values(f).includes(filter.filterId)))
  }

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
  const columns = [
    { path: 'name', name: 'Nome' },
    { path: 'status', name: 'Status' },
    { path: 'type', name: 'Tipo' },
    { path: 'cadastradoPor', name: 'Cadastrado Por' },
    { path: 'torre', name: 'Torre' },
    { path: 'numero', name: 'Número' },
    { path: 'withDrawn', name: 'Retirado Por' },
    { path: 'button', name: '' }
  ]

  const getGridData = () => {
    getPacking(
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
    <Fragment>
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
          name={'Nova Encomenda'}
          icon={'add'}
          onClick={() => navPage('/encomenda/new')}
        />
      </SectionText>

      <Table pathname={'encomenda'} columns={columns} data={data} />
    </Fragment>
  )
}

export default PackingPage
