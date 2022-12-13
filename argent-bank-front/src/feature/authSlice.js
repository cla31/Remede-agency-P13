import { createSlice } from '@reduxjs/toolkit'
import { login, user, updateData } from '../middleware/middleware'
import { removeTokenLocalStorage } from '../utils/handleToken'

/**
 * @name Slice
 * @description Configuration createSlice with reducers and extraReducers to listen to dispatched actions and use promise lifecycle to know what it's going on.
 */

const initialState = {
    isError: null,
    isNetworkError: false,
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
            removeTokenLocalStorage()
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
        setTokenStore: (state, action) => {
            // console.log('token action payload', action.payload)
            // console.log('token action', action)

            state.token = action.payload

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
                state.isNetworkError = true
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


export const { logout, isRememberMe, setTokenStore } = authSlice.actions
export default authSlice.reducer