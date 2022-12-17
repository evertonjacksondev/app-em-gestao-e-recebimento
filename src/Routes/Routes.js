import React from 'react'
import { Fragment } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Home from '../Pages/Home/Home'
import { ProtectedRoutes } from '../Pages/Login/Auth'
import Login from '../Pages/Login/Login'
import PackingDetail from '../Pages/Packings/PackingDetail'
import PackingPage from '../Pages/Packings/PackingPage'
import ResidentDetails from '../Pages/Resident/ResidentDetails'
import ResidentPage from '../Pages/Resident/ResidentPage'

const AppRoute = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<Home />} />
          <Route path='/encomenda' element={<PackingPage />} />
          <Route path='/encomenda/:id' element={<PackingDetail />} />
          <Route path='/morador' element={<ResidentPage />} />
          <Route path='/morador/:id' element={<ResidentDetails />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default AppRoute
