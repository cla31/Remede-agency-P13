import React from 'react'
import Transaction from '../components/transaction'
import { useSelector } from 'react-redux'
import EditUser from '../components/EditUser'

const datasTransaction = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
  },
]
/**
 * Display the profile page with account transactions and access to edit form to update name and lastname.
 * @component
 * @returns {JSX.Element} User component
 */

const User = () => {
  //Récupération prénom et nom dans le store
  const { firstName, lastName } = useSelector((state) => state.auth)
  return (
    <div>
      <main className="main bg-dark">
        <EditUser firstN={firstName} lastN={lastName} />
        <h2 className="sr-only">Accounts</h2>
        {datasTransaction.map((item, index) => (
          <Transaction
            key={'transaction' + index}
            title={item.title}
            amount={item.amount}
            description={item.description}
          />
        ))}
      </main>
    </div>
  )
}

export default User
