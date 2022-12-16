import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../feature/authSlice'
import Logo from '../assets/argentBankLogo.png'
import '../style/components/header.css'

/**
 * Creation of the header with navigation barre
 * @component
 * @returns {JSX.Element} Header component
 */

const Header = () => {
  const dispatch = useDispatch()
  const { firstName, token } = useSelector((state) => state.auth)

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
      <div className="connexion">
        <div className="main-nav-item">
          {token ? (
            <>
              <div className="main-nav-item">
                <div className="iconeUser">
                  <i className="fa fa-user-circle"></i>
                </div>
                <div className="LogUser">
                  <span>{firstName}</span>
                </div>
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
                <div className="iconeUser">
                  <i className="fa fa-user-circle"></i>
                </div>
                <div className="LogUser">Sign In</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
