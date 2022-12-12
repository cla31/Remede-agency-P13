import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getTokenLocalStorage } from '../utils/handleToken'

const PrivateRoute = () => {
  const { token } = useSelector((state) => state.auth)
  const tokenLocalStorage = getTokenLocalStorage()
    ? getTokenLocalStorage()
    : token

  if (!tokenLocalStorage) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
export default PrivateRoute
