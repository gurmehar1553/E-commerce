import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login } from '../server'


export const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPwd] = useState('')
    const navigate = useNavigate()
    const handlePwd = (e) => {
        setPwd(e.target.value)
    }
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const newObj = {
            username,
            password
        }
        const res = login(newObj);
        res &&  navigate('/main')
    }
  return (
    <div className='outer-main' >
        <div className="p-5 my-5 shadow col-lg-4 col-sm-12 col-md-6 main-div bg-info bg-opacity-10"  id="sign-in">
            <div className="mx-auto col-md-5">
                {/* <img className="light-mode-item navbar-brand-item" src="images/logo.png" alt="logo" style={{"height": "36px"}} /> */}
            </div>
            <form onSubmit={handleLogin} >
                <div className="my-5">
                    <input type="text" className="form-control" id="username" placeholder="Username" name="username" onChange={handleUsername} />
                </div>
                <div className="mb-5">
                    <input type="password" className="form-control" id="pwd" placeholder="Password" name="pswd" onChange={handlePwd} />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-4">Login</button>
            </form>
            <p>Create a new account? <Link to="/signup">Sign Up</Link></p>
        </div>
    </div>
  )
}
