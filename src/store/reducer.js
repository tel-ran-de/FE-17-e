import {ADD_USER, FETCH_USERS} from "./constTypes";

const initialState = {
    users: [],
    error: null
}

export const reducer = (state=initialState, action) => {

    switch (action.type)  {

        case FETCH_USERS:
            return { ...state, users: action.payload }

        case ADD_USER:
            return {...state, user: [...state.users, action.payload]}

        default:
            return state
    }

}