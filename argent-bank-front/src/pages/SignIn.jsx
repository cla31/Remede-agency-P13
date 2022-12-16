import React from 'react'
import '../style/pages/signIn.css'
import Form from '../components/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { user } from '../middleware/middleware'
import { getTokenLocalStorage } from '../utils/handleToken'
/**
 * Display the login page with form to connect to the profile page.
 * @component
 * @returns {JSX.Element} SignIn component
 */
const SignIn = () => {
  const { isSuccess, isNetworkError } = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const tokenLocalStorage = getTokenLocalStorage()
    ? getTokenLocalStorage()
    : null
  useEffect(() => {
    if (isSuccess) {
      dispatch(user())
      navigate('/profil')
    }
  }, [dispatch, isSuccess, navigate])

  useEffect(() => {
    if (tokenLocalStorage !== null) {
      navigate('/profil')
    }
  }, [])

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
