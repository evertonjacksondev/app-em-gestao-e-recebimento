import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonDefault from '../../Components/DesignSystem/Combinations/ButtonDefault'
import Table from '../../Components/DesignSystem/Combinations/Table'
import NavBar from '../../Components/NavBar/NavBar'

const ResidentPage = () => {
  const navigate = useNavigate()
  const navPage = path => {
    navigate(path)
  }
  return (
    <Fragment>
      <NavBar />
      <ButtonDefault
        name={'Novo Morador'}
        icon={'add'}
        onClick={() => navPage('/resident/new')}
      />
      <Table columns={[]} data={[]} />
    </Fragment>
  )
}

export default ResidentPage
