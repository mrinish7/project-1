import React from "react"
import { useNavigate } from"react-router-dom"



const Login = () => {

    let navigate = useNavigate()

    return(
        <div className="Form">
            <form className="login-form">
                <label className="label">Username</label>
                <input className="input" type='text' placeholder="enter userName" />
                <label className="label" >Password</label>
                <input className="input" type='text' placeholder="type a password" />
                <button className="login-primary">Login</button>
            </form>

            <button className="login-secondary-register" onClick={() => {navigate('/Register')}}>Register</button>
        </div>
    )
}

export default Login