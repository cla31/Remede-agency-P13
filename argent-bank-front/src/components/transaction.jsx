import React from 'react'
import '../style/components/transaction.css'
import PropTypes from 'prop-types'

/**
 * Creation of transaction component to display in profile page.
 * @component
 * @param {String} title
 * @param {String} amount
 * @param {String} description
 * @returns {JSX.Element}
 */

function Transaction({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

export default Transaction

//Proptypes
Transaction.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
