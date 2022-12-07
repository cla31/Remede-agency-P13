import React from 'react'
import '../style/pages/signIn.css'
import Form from '../components/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { user } from '../middleware/middleware'
import { logout } from '../feature/authSlice'
import { setToken } from '../feature/authSlice'

const SignIn = () => {
  const { isSuccess, isNetworkError } = useSelector((state) => state.auth)
  // const tokenLocalStorage = localStorage.getItem('token')
  // const [tokenLs, setTokenLs] = useState(tokenLocalStorage)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (isSuccess) {
      dispatch(user())
      navigate('/profil')
    } else {
      dispatch(logout())
    }
  }, [dispatch, isSuccess, navigate])

  // useEffect(() => {
  //   dispatch(setToken(setTokenLs(tokenLs)))
  // }, [])

  useEffect(() => {
    if (isNetworkError) {
      navigate('/*')
    }
  }, [isNetworkError, navigate])

  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
    </div>
  )
}

export default SignIn
