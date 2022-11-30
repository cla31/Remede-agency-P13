import { createAsyncThunk } from '@reduxjs/toolkit'
import { authLogin, userProfile, updateUserData } from '../service/AuthService'
import { setToken, getToken, removeToken } from '../utils/handleToken'


// Request  l'API
//Avec le login, on demande au backend de faire l'authentification. 
export const login = createAsyncThunk('auth/login', async({ email, password }, { rejectWithValue }) => {
    try {
        console.log("email et password ds middleware", email, password)
            //On demande au backend de faire l'authentification
        const response = await authLogin({ email, password })
        console.log("response ds le middleware", response)
        console.log("response de rejected value", rejectWithValue())
        setToken(response.body.token)
        return response

    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        console.log("message ds le catch de middleware", message)
        return rejectWithValue({ message })
    }
})

//Profile de l'utilisateur: ici, on demande au backEnd de récupérer les infos de User, et
//pour cela on ajoute le token à la requête.
export const user = createAsyncThunk('auth/userProfile', async(profileData, { rejectWithValue }) => {
    try {
        const token = getToken()
        return await userProfile(profileData, token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        removeToken()
        return rejectWithValue(message)
    }
})

//Mise à jour des données de l'utilisateur
export const updateData = createAsyncThunk('auth/updateUserData', async(newData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.token;
        return await updateUserData(newData, token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        removeToken()
        return thunkAPI.rejectWithValue(message)
    }
})