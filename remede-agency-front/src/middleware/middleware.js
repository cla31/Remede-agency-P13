import { createAsyncThunk } from '@reduxjs/toolkit'
import { authLogin } from '../service/authService'
import { setToken } from '../utils/handleToken'


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
        console.log("message", message)
        return rejectWithValue({ message })
    }
})