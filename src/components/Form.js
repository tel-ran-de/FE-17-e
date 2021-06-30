import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {ADD_TODO} from "../store/typesList";

const Form = () => {

    const dispatch = useDispatch()

    const [field, setField] = useState('')

    const changeHandle = event => {
        setField( event.target.value )
    }

    const submitHandle = event => {
        event.preventDefault()
        dispatch({type: ADD_TODO, payload: {id: Date.now(), title:field, completed: false}})
        setField('')
    }

    return (
        <section className="form">
            <div className="container">
                <div className="w-75 mx-auto py-2">
                    <form onSubmit={submitHandle}>
                        <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    placeholder="What shall I do today?"
                                    onChange={changeHandle}
                                    value={field}
                                />
                                <button
                                    className="btn btn-link text-decoration-none btn-lg"
                                    type="submit"
                                >+</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form