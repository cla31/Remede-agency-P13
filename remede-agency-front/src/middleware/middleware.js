import { createAsyncThunk } from '@reduxjs/toolkit'
import { authLogin } from '../service/authService'


//Avec le login, on demande au backend de faire l'authentification. 
export const login = createAsyncThunk('auth/login', async({ email, password }, { rejectWithValue }) => {
    try {
        console.log("email et password ds middleware", email, password)
            //On demande au backend de faire l'authentification
        return await authLogin({ email, password })

    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return rejectWithValue(message)
    }
})