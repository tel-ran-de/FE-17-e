import {ADD_USER, LOGIN} from "./typesConst";

const URL = 'http://localhost:8080/api/v1/'
export const registration = (user) => {
    return async dispatch => {

        const response = await fetch(`${URL}auth/signup`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json'}
        })
        const data = await response.json()
        dispatch( addUser(data) )

    }
}

export const logIn = (user) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}auth/signin`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json', 'x-api-key': localStorage.getItem('apiKeyToken')}
            })
            const data = await response.json()
            localStorage.setItem('apiKeyToken', data.accessToken)
            dispatch({type: LOGIN})
        } catch (e) {
            console.log(e.message)
        }
    }
}

const addUser = user => {
    return {
        type: ADD_USER,
        payload: user
    }
}