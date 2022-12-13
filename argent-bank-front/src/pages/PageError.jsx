import React from 'react'
import '../style/pages/pageError.css'
import { Link } from 'react-router-dom'
import notFound from '../assets/notFound.svg'

/**
 * Creation of error page with link back to home page
 * @component
 * @returns {JSX.Element} PageError component
 */

const PageError = () => {
  return (
    <div>
      <div className="message-erreur">
        <img src={notFound} alt="" />
        <span>
          Oups! La page que vous demandez n'existe pas ou le serveur est
          indisponible.
        </span>
        <Link to="/" className="message">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}

export default PageError
