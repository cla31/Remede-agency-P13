import React from 'react'
import '../style/pages/user.css'
import Transaction from '../components/transaction'

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
const User = () => {
  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
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
