import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
  let sessionLog = sessionStorage.getItem('auth')
  const user = JSON.parse(sessionLog)
  return user ? true : false
}

export const ProtectedRoutes = () => {
  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to='/login'></Navigate>
}
