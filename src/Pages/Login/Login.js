import { borderBottom } from '@mui/system'
import { useSnackbar } from 'notistack'
import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonDefault from '../../Components/DesignSystem/Combinations/ButtonDefault'
import TextField from '../../Components/DesignSystem/Combinations/TextField'
import { SectionForm } from '../../Components/DesignSystem/Elements/Section'
import logo from '../../images/logo.png'
import { LoginAuth } from './api'
const Login = () => {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const [data, setData] = useState({})
  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setData(current => {
      return {
        ...current,
        [name]: value != 'Status' ? value : ''
      }
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    LoginAuth(
      data,
      sucess => {
        sessionStorage.setItem('auth', JSON.stringify(sucess))
        navigate('/home')
      },
      error => {
        enqueueSnackbar(Object.values(error), { variant: 'error' })
      }
    )
  }

  return (
    <Fragment>
      <SectionForm onSubmit={handleSubmit}>
        <img
          style={{ width: 250, borderBottom: 200, borderRadius: 6 }}
          src={logo}
        ></img>

        <TextField
          name='email'
          onChange={handleChange}
          label='Email'
          value={data.email}
          required
        />
        <TextField
          name='password'
          onChange={handleChange}
          label='Senha'
          type='password'
          value={data.password}
          required
        />
        <ButtonDefault disabled={ Object.values(data).filter(value => value !== '').length !== 2} name='Entrar' icon={'rocket_launch'} />
      </SectionForm>
    </Fragment>
  )
}

export default Login
