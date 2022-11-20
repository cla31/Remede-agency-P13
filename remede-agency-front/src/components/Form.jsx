import React from 'react'
import { useForm } from 'react-hook-form'
import { isRememberMe } from '../feature/authSlice'
import { login } from '../middleware/middleware'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '../utils/handleToken'
import '../style/components/form.css'

// Validation du formulaire cf:
// https://react-hook-form.com/get-started/

const Form = ({ userName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isLoading, isSuccess, rememberMe, token } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isSuccess) {
      navigate('/profile')
    }
  }, [isSuccess, navigate])

  const handleRememberMe = (e) => {
    dispatch(isRememberMe(e.target.checked))
  }

  const onSubmit = (datas) => {
    console.log('datas dans le Form', datas)
    dispatch(login(datas))
    // dispatch({
    //   type: 'auth/login',
    //   payload: datas,
    // })
  }

  if (rememberMe === true) {
    setToken(token)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <label htmlFor="email">{userName}</label>
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
      {/* <Link to="/profile" className="sign-in-button" type='submit'>Sign In</Link>        
    <Link to="/"  className="sign-in-button">Sign Out</Link> */}
      <button className="sign-in-button" type="submit">
        Sign In
      </button>
      {isLoading && (
        <>
          <div className="error">Unexistant user....</div>
        </>
      )}
      {/* <button className="sign-in-button">Sign Out</button >              */}
    </form>
  )
}

export default Form
