import React, {useContext, useEffect, useState} from 'react'
import { TodoContext } from './TodoApp'

import { Button } from './Button'

const p = ['Vasya', 'Petya', 'Marusya']

const TodoItem = ({todo}) => {

    const {onDelete} = useContext(TodoContext)

    const [count, setCount] = useState(0);
    const [persons, setPersons] = useState(p)

    useEffect(() => {
        console.log('hello')
    }, [count]);


    useEffect(() => {
        console.log('hello persons')
        console.log( persons )
    }, [persons]);



    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className={ todo.completed ? 'text-danger text-decoration-line-through' : '' }>{todo.title}</div>
            <div>
                <Button id={todo.id} />
                <button 
                    className="btn btn-sm btn-danger"
                    onClick={ ()=> { onDelete(todo.id) } }    
                >Delete</button>
                <button onClick={()=>{setCount( count + 1 )}} >Count</button>{count}
                <button onClick={()=>{setPersons( [...persons, {name:'Person'}] )}} >Persons+</button>
            </div>
        </li>
    )
}

export default TodoItem