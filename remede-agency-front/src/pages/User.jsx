import React from 'react'
import Transaction from '../components/transaction'
import { useDispatch, useSelector } from 'react-redux'
import { user } from '../middleware/middleware'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../feature/authSlice'
import EditUser from '../components/EditUser'
import { removeToken } from '../utils/handleToken'

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
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //Récupération du token, prénom et nom dans le store
  const { token, firstName, lastName } = useSelector((state) => state.auth)

  useEffect(() => {
    try {
      if (!firstName && !lastName) {
        if (token) {
          //dispatch de la fonction user() du middleware
          dispatch(user())
          navigate('/profile')
        } else {
          dispatch(logout())
          navigate('/login')
          removeToken()
        }
      }
    } catch (error) {
      console.log('error message ds la page de profil', error.message)
      navigate('/*')
    }
  }, [firstName, lastName, dispatch, navigate, token])

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
