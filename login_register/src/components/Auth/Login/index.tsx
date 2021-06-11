import axios from 'axios'
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../redux/actions/auth'

export const Login = () => {
    const dispatch = useDispatch()
    const { push } = useHistory()
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })
    const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    },
        [setFormState])

    const handleLogin = (evt: FormEvent) => {
        evt.preventDefault();
        if (formState.password && formState.email) {
            const d = dispatch(login(formState))
            console.log(d)
            // push("/")
        }

    }
    return (
        <div className="container">
            <div className="row">
                <h3 className="mt-5">Login </h3>
                <form className="text-start mt-5" onSubmit={handleLogin}>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input placeholder="test@gmail.com" value={formState.email} onChange={handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input value={formState.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>


    )
}

