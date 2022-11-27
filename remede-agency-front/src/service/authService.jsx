import axios from 'axios'
import history from '../customRoutes/history'

// export const login = async () => {
//     try{
//         return await axios
//         .post(' http://localhost:3001/api/v1/user/login',{
//             email: "tony@stark.com",
//             password: "password123",
//         })
//         .then((res)=>console.log("Résultats de res",res))

//     }catch (erreur) {
//         console.log(erreur)
//         return erreur;
//     }
// }

//Envoi du mail et du password
export const authLogin = async ({ email, password }) => {
  return await axios
    .post('http://localhost:3001/api/v1/user/login', { email, password })
    .then((res) => {
      //renvoi la réponse du serveur avec le token
      console.log('res.data', res.data)
      console.log('email et password ds authService', email, password)
      return res.data
    })

    .catch((error) => {
      if (error.message === 'Network Error') {
        history.push('/*')
        return console.log('pas de connexion possible, serveur ko')
      } else {
        return error
      }
    })
}
