import {ADD_USER, LOGIN} from "./typesConst";

const initialState = {
    isAuth: false,
    user: {},
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_USER:
            return {...state, user: action.payload}

        case LOGIN:
            return {...state, isAuth: true}

        default :
            return state
    }
}