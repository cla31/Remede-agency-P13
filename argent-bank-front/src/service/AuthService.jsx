import axios from 'axios'

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
        console.log('pas de connexion possible, serveur ko', error.message)
        throw error.message
      } else {
        return error
      }
    })
}
//Les données de User
export const userProfile = async (profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  return await axios
    .post('http://localhost:3001/api/v1/user/profile', profileData, config)
    .then((res) => {
      //retourne les infos du user nom, prenom, mail...
      console.log('les datas ds authService', res.data.body)
      return res.data.body
    })
    .catch((error) => {
      console.log('error ds user profile', error)
      return error
    })
}

//Mise à jour du profile
export const updateUserData = async (newData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  return await axios
    .put('http://localhost:3001/api/v1/user/profile', newData, config)
    .then((res) => {
      return res.data.body
    })
    .catch((error) => {
      console.log('update user data', error)
      return error
    })
}
