import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login, setToken } from '../server'
import AuthContext from '../utils/AuthProvider'


export const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPwd] = useState('')
    const navigate = useNavigate()
    const {setAuth,setCurrUser} = useContext(AuthContext)

    const handlePwd = (e) => {
        setPwd(e.target.value)
    }
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        const newObj = {
            username,
            password
        }
        const res = await login(newObj);
        console.log("Response : ",res)
        
        // localStorage.setItem('authToken',res.token)
        setToken(res.token)
        console.log(localStorage.getItem('authToken'))
        setAuth(true)
        setCurrUser(res.user)
        res && navigate('/main')
    }
  return (
    <div className='outer-main' >
        <div className="p-5 my-5 shadow col-lg-4 col-sm-12 col-md-6 main-div bg-warning bg-opacity-10"  id="sign-in">
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
                <button type="submit" className="btn btn-warning w-100 mb-4">Login</button>
            </form>
            <p>Create a new account? <Link to="/signup">Sign Up</Link></p>
        </div>
    </div>
  )
}
