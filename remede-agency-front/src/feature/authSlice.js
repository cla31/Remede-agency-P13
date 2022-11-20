import { createSlice } from '@reduxjs/toolkit'
import { login } from '../middleware/middleware'
import { getToken, removeToken } from '../utils/handleToken'

//initialisation du token
const checkToken = getToken() ? getToken() : null
    //console.log(token)


const initialState = {
    isError: null,
    isSuccess: false,
    isLoading: false,
    checkToken,
    firstName: '',
    lastName: '',
    rememberMe: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            removeToken()
            localStorage.clear()
            state.isLoading = false
            state.token = null
            state.isError = null
            state.isSuccess = false
            state.rememberMe = false
        },

        isRememberMe: (state, action) => {
            state.rememberMe = action.payload
        },
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.isLoading = true
            state.isError = null
        },
        [login.fulfilled]: (state, action) => {
            state.isLoading = false
            state.token = action.payload.body.token
            state.isSuccess = true
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    },
})


export const { logout, isRememberMe } = authSlice.actions
export default authSlice.reducer