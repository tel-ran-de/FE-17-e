import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {clearTodosAndPosts, deleteUserByUserId, getPostsByUserId, getTodosByUserId, getUsers} from "../store/actions";
import TodoList from "./TodoList";
import PostsList from "./PostsList";

const App = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( getUsers() )
    }, []);


    const users = useSelector((state) => {
        return state.users
    })

    const showFlag = useSelector( state => state.showFlag)

    const clickTodoButton = (userId) => {
        dispatch( getTodosByUserId(userId) )
    }

    const clickPostButton = (userId) => {
        dispatch( getPostsByUserId(userId) )
    }

    const clickClearButton = () => {
        dispatch( clearTodosAndPosts() )
    }

    const clickDeleteButton = (userId) => {
        dispatch(deleteUserByUserId(userId))
    }

    const renderInfo = () => {
        switch (showFlag) {
            case 'todos':
                return <TodoList />
            case 'posts':
                return <PostsList />
            default:
                return null
        }
    }


    const renderUsers = () => {
        if (!users.length) {
            return (<li>No users ...</li>)
        }

        return users.map( (user) => {
            return (
                <li key={user.id} className="list-group-item">
                    <div className="card p-3 shadow-lg">
                        <h4 className="card-title">
                            {user.name} ({user.email})
                        </h4>
                        <div className="card-action">
                            <button type="button" className="btn btn-sm btn-primary mx-3" onClick={()=>{clickTodoButton(user.id)}}>ToDo</button>
                            <button type="button" className="btn btn-sm btn-success mx-3" onClick={()=>{clickPostButton(user.id)}}>Post</button>
                            <button type="button" className="btn btn-sm btn-danger mx-3" onClick={()=>{clickDeleteButton(user.id)}}>Remove User</button>
                        </div>
                    </div>

                </li>
            )
        } )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <ul className="list-group">
                        { renderUsers() }
                    </ul>
                </div>
                <div className="col-6 p-2">
                    <div className="card p-3 shadow-lg">
                        <div className="card-title">
                            { showFlag ? <button type="button" className="btn btn-sm btn-danger" onClick={clickClearButton}>Clear</button> : null}
                        </div>
                        <div className="card-body">
                            {renderInfo()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App