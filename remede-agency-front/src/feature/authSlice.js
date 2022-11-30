import { createSlice } from '@reduxjs/toolkit'
import { login, user, updateData } from '../middleware/middleware'
import { removeToken } from '../utils/handleToken'



const initialState = {
    isError: null,
    isNetworkError: "No",
    isSuccess: false,
    isLoading: false,
    token: null,
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
            state.isNetworkError = null
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
            state.isError = false
        },
        [login.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
            if (
                state.isError.message === 'Network Error'
            ) {
                state.isNetworkError = 'Yes'
            }
        },
        [user.pending]: (state) => {
            state.isLoading = true
        },
        [user.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = null
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        [user.rejected]: (state) => {
            state.isLoading = false
        },
        [updateData.pending]: (state) => {
            state.isLoading = true
            state.firstName = ''
            state.lastName = ''
        },
        [updateData.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.isError = null
        },
        [updateData.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        }
    },
})


export const { logout, isRememberMe } = authSlice.actions
export default authSlice.reducer