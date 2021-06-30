import {ADD_TODO, DELETE_TODO, EDIT_TODO} from "./typesList";

const initialState = {
    todos: [],
    error: null
}

export const rootReducer = (state = initialState, action) => {
    let _todos = [], idx;
    switch (action.type) {

        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] }

        case EDIT_TODO:
            _todos = [...state.todos]
            idx = _todos.findIndex(t => t.id === action.payload)
            if (idx === -1) return state
            _todos[idx].completed = !_todos[idx].completed
            return {...state, todos: _todos}

        case DELETE_TODO:
            _todos = [...state.todos]
            idx = _todos.findIndex(t => t.id === action.payload)
            if (idx === -1) return state
            _todos.splice(idx, 1)
            return {...state, todos: _todos}

        default:
            return state
    }
}