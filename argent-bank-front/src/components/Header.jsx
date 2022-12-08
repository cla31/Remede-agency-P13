import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../feature/authSlice'
import Logo from '../assets/argentBankLogo.png'
import '../style/components/header.css'
// import { useEffect } from 'react'
// import { setTokenStore } from '../feature/authSlice'
// import { getTokenLocalStorage } from '../utils/handleToken'
// import { user } from '../middleware/middleware'

const Header = () => {
  // const tokenLocalStorage = getTokenLocalStorage()
  //   ? getTokenLocalStorage()
  //   : null

  const dispatch = useDispatch()
  const { firstName, token } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
  }
  // 5/12
  // useEffect(() => {
  //   console.log('tooooken local storage', tokenLocalStorage)
  //   if (tokenLocalStorage !== null) {
  //     console.log('token dans le header', tokenLocalStorage)
  //     dispatch(setTokenStore(tokenLocalStorage))
  //     dispatch(user())
  //   }
  // }, [])

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
