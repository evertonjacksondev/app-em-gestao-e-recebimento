import { useEffect, useState } from 'react'
import { Fragment, React } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonDefault from '../../Components/DesignSystem/Combinations/ButtonDefault'
import Table from '../../Components/DesignSystem/Combinations/Table'
import NavBar from '../../Components/NavBar/NavBar'
import { getPacking } from './api'

const PackingPage = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const navPage = path => {
    navigate(path)
  }
  const columns = [
    { path: 'name', name: 'Name' },
    { path: 'status', name: 'Status' },
    { path: 'type', name: 'Tipo' },
    { path: 'cadastradoPor', name: 'Cadastrado Por' },
    { path: 'torre', name: 'torre' },
    { path: 'numero', name: 'Número' },
    { path: 'withDrawn', name: 'Retirado Por' },
    { path: 'button', name: '' }
  ]

  useEffect(() => {
    getPacking(
      sucess => {
        setData(sucess)
      },
      err => {}
    )
  }, [])



  return (
    <Fragment>
      <NavBar />
      <ButtonDefault
        name={'Nova Encomenda'}
        icon={'add'}
        onClick={() => navPage('/encomenda/new')}
      />
      <Table columns={columns} data={data} />
    </Fragment>
  )
}

export default PackingPage
