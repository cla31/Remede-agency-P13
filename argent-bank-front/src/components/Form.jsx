import React from 'react'
import { useForm } from 'react-hook-form'
import { isRememberMe } from '../feature/authSlice'
import { login } from '../middleware/middleware'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTokenLocalStorage } from '../utils/handleToken'
import LoadingSpinner from './LoadingSpinner'
import '../style/components/form.css'

// Validation du formulaire cf:
// https://react-hook-form.com/get-started/

/**
 * Creation of the login form for the signIn page
 * @component
 * @returns {JSX.Element} Form component
 */

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()

  const { isLoading, rememberMe, token, isError } = useSelector(
    (state) => state.auth
  )
  //*********TRAVAIL SUR LE REMEMBER ME */
  useEffect(() => {
    if (rememberMe === true) {
      setTokenLocalStorage(token)
    }
  }, [rememberMe, token])

  const handleRememberMe = (e) => {
    dispatch(isRememberMe(e.target.checked))
  }

  const onSubmit = (datas, e) => {
    // console.log('datas dans le Form', datas)
    dispatch(login(datas))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="username"
          name="email"
          {...register('email', { required: true })}
        />
        {errors.email && <p>This field is required</p>}
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          {...register('password', { required: true })}
        />
        {errors.password && <p>This field is required</p>}
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" onChange={handleRememberMe} />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" type="submit">
        Sign In
      </button>
      {isError && (
        <>
          <div className="error">Unexistant user....</div>
        </>
      )}
      {isLoading && (
        <>
          <LoadingSpinner />
        </>
      )}
    </form>
  )
}

export default Form
