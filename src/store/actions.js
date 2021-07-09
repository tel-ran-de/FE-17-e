import {ADD_USER, CLEAR_DATA, FETCH_POSTS, FETCH_TODOS, REMOVE_USER} from "./constTypes";

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

export const getTodosByUserId = (userId) => {
    return async dispatch => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId, {
                method: 'GET'
            })
            const data = await response.json()
            dispatch(fetchTodos(data))
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const getPostsByUserId = (userId) => {
    return async dispatch => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId, {
                method: 'GET'
            })
            const data = await response.json()
            dispatch(fetchPosts(data))
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const deleteUserByUserId = (userId) => {
    return async dispatch => {
        try {

            const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId, {
                method: 'DELETE'
            })
            const data = await response.json()

            console.log( data )

            dispatch( removeUser(userId) )


        } catch (e) {
            console.log( e.message )
        }
    }
}

export const clearTodosAndPosts = () => {
    return async dispatch => {
        try {
            dispatch(clearData())
        } catch (e) {
            console.log(e.message)
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

const fetchTodos = (data) => {
    return {
        type: FETCH_TODOS,
        payload: data
    }
}

const fetchPosts = (data) => {
    return {
        type: FETCH_POSTS,
        payload: data
    }
}

const clearData = () => {
    return {
        type: CLEAR_DATA
    }
}

const removeUser = (userId) => {
    return {
        type: REMOVE_USER,
        payload: userId
    }
}