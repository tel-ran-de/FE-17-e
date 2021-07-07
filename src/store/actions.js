import {ADD_USER} from "./constTypes";

const {FETCH_USERS} = require("./constTypes");


export const getUsers = () => {
    return async (dispatch) => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET'
            })
            const data = await response.json()
            dispatch(fetchingUsers( data ))
        } catch (e) {
            console.log( e.message )
        }

    }
}

export const addUser = (formData) => {
    return async dispatch => {
        try {

            const response = await fetch('https://jsonplaceholder.com/kjfhdskfjhadskljfdsklf/ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const user = await response.json()
            dispatch(addNewUser(user))
        } catch (e) {
            console.log( e.message )
        }
    }
}


const fetchingUsers = data => {
    return {
        type: FETCH_USERS,
        payload: data
    }
}

const addNewUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}