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

//Si les données sont OK, le backend renvoie un token
export const authLogin = async ({ email, password }) => {
  return await axios
    .post('http://localhost:3001/api/v1/user/login', { email, password })
    .then((res) => {
      //renvoi la réponse du serveur
      console.log('res.data', res.data)
      console.log('email et password ds authService', email, password)
      return res.data
    })
    .catch((error) => console.log(error))
  // .catch(() => console.log('Ne correspond pas aux datas...'))
}
