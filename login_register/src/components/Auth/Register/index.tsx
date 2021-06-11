import axios from 'axios';
import { loadavg } from 'os';
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { Route, useHistory } from 'react-router-dom';

export const Register = () => {
    const { push } = useHistory()
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })
    const handleRegister = (evt: FormEvent) => {
        evt.preventDefault();
        if (formState.email && formState.password) {
            axios.post(`http://localhost:8000/auth/register`, formState).then(() => push("/login"))

        }
    }
    const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    },
        [setFormState])
    console.log(formState)
    return (
        <div className="container">
            <div className="row">
                <h3 className="mt-5">Register </h3>
                <form className="text-start mt-5" onSubmit={handleRegister}>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={formState.email} onChange={handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input value={formState.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

