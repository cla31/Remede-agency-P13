import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getTokenLocalStorage } from '../utils/handleToken'
import { setTokenStore } from '../feature/authSlice'
import { user } from '../middleware/middleware'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const PrivateRoute = () => {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const tokenLocalStorage = getTokenLocalStorage()
    ? getTokenLocalStorage()
    : token

  useEffect(() => {
    if (tokenLocalStorage !== null) {
      // console.log('token dans privateRoute', tokenLocalStorage)
      dispatch(setTokenStore(tokenLocalStorage))
      dispatch(user())
    }
  }, [])

  if (!tokenLocalStorage) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
export default PrivateRoute
