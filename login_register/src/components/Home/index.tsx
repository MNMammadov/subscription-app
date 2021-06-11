import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            Home Page
            <br />
            <Link to="/register"> Register </Link>
            <br />
            <Link to="/login">Login</Link>
        </div>
    )
}
