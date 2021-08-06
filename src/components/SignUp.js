import React, {useState} from 'react'
import {registration} from "../store/actions"
import {useDispatch} from 'react-redux'

const initialUser = {
    email: '',
    password: ''
}

const SignUp = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState(initialUser)
    const changeHandler = (e) => {
        setUser({
            ...user, [e.target.id]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch( registration(user) )
        setUser(initialUser)
    }

    return (
        <div className="w-50 mx-auto mt-5">
            <form onSubmit={submitHandler}>
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="email"
                               onChange={changeHandler}
                               placeholder="email@example.com"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control"
                               onChange={changeHandler}
                               id="password"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
        </div>
    )
}

export default SignUp