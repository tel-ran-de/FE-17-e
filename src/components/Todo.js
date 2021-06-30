import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {DELETE_TODO, EDIT_TODO} from "../store/typesList";

const Todo = () => {

    const dispatch = useDispatch()

    const todos = useSelector( state => state.todos )

    const renderTodos = () => {
        if ( todos.length === 0 ) {
            return (
                <li className="d-flex justify-content-sm-between">No tasks...</li>
            )
        }
        return todos.map((todo) => {
            return (
                <li className="d-flex justify-content-sm-between" key={todo.id}>
                    <div className={todo.completed ? "completed" : ""}>{todo.title}</div>
                    <div className="action">
                        <button
                            onClick={() => { dispatch({type: EDIT_TODO, payload: todo.id}) }}
                            className="btn btn-light"
                        >Completed</button>
                        <button
                            className="btn btn-light"
                            onClick={() => { dispatch({type: DELETE_TODO, payload: todo.id}) }}
                        >Delete</button>
                    </div>
                </li>
            )
        })
    }

   return (
        <section className="list my-5">
            <div className="container">
                <div className="w-75 mx-auto">
                    <div className="d-flex justify-content-sm-between">
                        <div className="list-header">Tasks</div>
                        <div className="list-header">Actions</div>
                    </div>
                    <hr/>
                    <ul>
                        { renderTodos() }
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Todo;