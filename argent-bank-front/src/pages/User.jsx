import React from 'react'
import Transaction from '../components/transaction'
import { useSelector } from 'react-redux'
import EditUser from '../components/EditUser'
import { useEffect } from 'react'
import { getTokenLocalStorage } from '../utils/handleToken'
import { user } from '../middleware/middleware'
import { useDispatch } from 'react-redux'
import { setTokenStore } from '../feature/authSlice'

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
  //Récupération prénom et nom dans le store
  const { firstName, lastName } = useSelector((state) => state.auth)
  const tokenLocalStorage = getTokenLocalStorage()
    ? getTokenLocalStorage()
    : null
  const dispatch = useDispatch()
  useEffect(() => {
    if (tokenLocalStorage !== null) {
      console.log('token dans le user', tokenLocalStorage)
      dispatch(setTokenStore(tokenLocalStorage))
      dispatch(user())
    }
  }, [])

  return (
    <div>
      <main className="main bg-dark">
        <EditUser firsN={firstName} lastN={lastName} />
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
