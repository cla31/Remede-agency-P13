import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../feature/authSlice'
import Logo from '../assets/argentBankLogo.png'
import '../style/components/header.css'
import { useEffect } from 'react'
import { setToken } from '../feature/authSlice'
import { getToken } from '../utils/handleToken'

const Header = () => {
  const dispatch = useDispatch()
  const token = getToken() ? getToken() : null
  const { firstName, rememberMe } = useSelector((state) => state.auth)
  // useEffect(() => {
  //   if (rememberMe && token !== null) {
  //     dispatch()
  //   }
  // }, [dispatch, rememberMe, token])

  useEffect(() => {
    if (token !== null) {
      console.log('token', token)
      dispatch(setToken(token))
    }
  }, [])

  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="main-nav-item">
        {token ? (
          <>
            <div className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              <span>{firstName}</span>
            </div>
            <div>
              <Link to="/" className="main-nav-item" onClick={onLogout}>
                {/* <i className="fa fa-user-circle"></i> Sign In */}
                Sign Out
              </Link>
            </div>
          </>
        ) : (
          <div>
            <Link to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
