import { Fragment, React } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonDefault from '../../Components/DesignSystem/Combinations/ButtonDefault'
import Table from '../../Components/DesignSystem/Combinations/Table'

const PackingPage = () => {
  const navigate = useNavigate()
  const navPage = path => {
    navigate(path)
  }

  return (
    <Fragment>
      <ButtonDefault
        name={'Nova Encomenda'}
        icon={'add'}
        onClick={() => navPage('/encomenda/new')}
      />
      <Table />
    </Fragment>
  )
}

export default PackingPage
