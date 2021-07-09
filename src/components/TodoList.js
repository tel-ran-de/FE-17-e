import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {

    const list = useSelector( state => state.todos )

    const renderList = () => {
        if (!list.length) {
            return (<li className="list-group-item list-group-item-warning">No Records</li>)
        }
        return list.map( item => (
            <li key={item.id} className={`list-group-item ${ item.completed ? 'list-group-item-danger' : '' }`}>{item.title}</li>
        ) )
    }

    return (
        <ul className="list-group">
            {renderList()}
        </ul>
    )
}

export default TodoList