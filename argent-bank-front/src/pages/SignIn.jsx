import React from 'react'
import '../style/pages/signIn.css'
import Form from '../components/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { user } from '../middleware/middleware'
import { logout } from '../feature/authSlice'
import { getTokenLocalStorage } from '../utils/handleToken'
import { setTokenStore } from '../feature/authSlice'

const SignIn = () => {
  const { isSuccess, isNetworkError } = useSelector((state) => state.auth)
  const tokenLocalStorage = getTokenLocalStorage()
    ? getTokenLocalStorage()
    : null
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (isSuccess) {
      dispatch(user())
      navigate('/profil')
    }
  }, [dispatch, isSuccess, navigate])

  useEffect(() => {
    if (isNetworkError) {
      navigate('/*')
    }
  }, [isNetworkError, navigate])

  //5/12
  useEffect(() => {
    if (tokenLocalStorage !== null) {
      console.log('token dans le SignIn', tokenLocalStorage)
      dispatch(setTokenStore(tokenLocalStorage))
      dispatch(user())
    }
  }, [])

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
