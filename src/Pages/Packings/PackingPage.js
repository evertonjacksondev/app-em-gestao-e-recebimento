import { Fragment, React } from 'react'
import ButtonDefault from '../../Components/DesignSystem/Combinations/ButtonDefault'
import Table from '../../Components/DesignSystem/Combinations/Table'

const PackingPage = () => {
  return (
    <Fragment>
      <ButtonDefault name={'Nova Encomenda'} icon={'add'} />

      <Table />
    </Fragment>
  )
}

export default PackingPage
