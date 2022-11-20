import React from 'react'
import '../style/pages/pageError.css'
import { Link } from 'react-router-dom'

const PageError = () => {
  return (
    <div>
      <div className="message-erreur">
        <h5>404</h5>
        <span>Oups! La page que vous demandez n'existe pas.</span>
        <Link to="/" className="message">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}

export default PageError
