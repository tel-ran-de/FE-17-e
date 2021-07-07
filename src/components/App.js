import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {getUsers} from "../store/actions";

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( getUsers() )
    }, []);


    const users = useSelector((state) => {
        return state.users
    })

    const renderUsers = () => {
        console.log('Rendering')
        if (!users.length) {
            return (<h2>No users ...</h2>)
        }

        return users.map( (user) => {
            return (<h2 key={user.id}>{user.name} ({user.email})</h2>)
        } )
    }

    return (
        <div className="container">
            { renderUsers() }
        </div>
    )
}

export default App