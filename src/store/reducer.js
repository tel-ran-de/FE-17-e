import {ADD_USER, CLEAR_DATA, FETCH_POSTS, FETCH_TODOS, FETCH_USERS, REMOVE_USER} from "./constTypes";

const initialState = {
    users: [],
    todos: [],
    posts: [],
    showFlag: null,
    error: null
}

export const reducer = (state= initialState, action) => {

    let _array = [],
        idx = null

    switch (action.type)  {

        case FETCH_USERS:
            return { ...state, users: action.payload }

        case ADD_USER:
            return {...state, users: [...state.users, action.payload]}

        case FETCH_TODOS:
            return {...state, todos: action.payload, showFlag: 'todos'}

        case FETCH_POSTS:
            return {...state, posts: action.payload, showFlag: 'posts'}

        case CLEAR_DATA:
            return {...state, posts: [], todos: [], showFlag: null}

        case REMOVE_USER:
            _array = [...state.users]
            idx = _array.findIndex(user => user.id === action.payload)
            if (idx === -1) return state
            _array.splice(idx, 1)
            return {...state, users: _array}

        default:
            return state
    }

}