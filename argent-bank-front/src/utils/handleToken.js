/**
 * @name handleToken
 * @description localStorage functions to get, remove or set token in local storage.
 */
export const getTokenLocalStorage = () => {
    return localStorage.getItem('token')
}

export const removeTokenLocalStorage = () => {
    return localStorage.removeItem('token')
}

export const setTokenLocalStorage = (val) => {
    localStorage.setItem('token', val)
}