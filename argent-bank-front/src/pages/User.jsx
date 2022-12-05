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

  // De séparer les 2 use effect me permet de mettre à jour
  // firstName et lastName par défaut et donc de base, arriver sur la page de Tony Stark
  useEffect(() => {
    if (token) {
      //dispatch de la fonction user() du middleware
      dispatch(user())
      // navigate('/profile')
    } else {
      dispatch(logout())
      removeToken()
      navigate('/login')
    }
  }, [dispatch, navigate, token])
  //seance 5/12
  // useEffect(() => {
  //   if (token !== null) {
  //     console.log('token', token)
  //     dispatch(setToken(token))
  //   }
  // }, [])

  // useEffect(() => {
  //   if (firstName && lastName) {
  //     navigate('/profile')
  //   }
  // }, [firstName, lastName, navigate])

  //Ci-dessous je n'arrive pas par défaut sur la page de Tony, je dois éditer firstN
  // et LastN pour avoir un nom et prénom...
  // useEffect(() => {
  //   if (firstName && lastName) {
  //     if (token) {
  //       //dispatch de la fonction user() du middleware
  //       dispatch(user())
  //       navigate('/profile')
  //     } else {
  //       dispatch(logout())
  //       navigate('/login')
  //       removeToken()
  //     }
  //   }
  // }, [dispatch, firstName, lastName, navigate, token])

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