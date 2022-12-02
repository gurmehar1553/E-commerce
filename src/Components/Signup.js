import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { signup } from '../server'

export const Signup = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPwd] = useState("")
    const navigate = useNavigate()

    const handlePwd = (e) => {
        setPwd(e.target.value)
    }
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleSignup = (e) => {
        e.preventDefault()
        const newObj = {
            username,
            email,
            password
        }
        const res = signup(newObj);
        res && navigate('/login')
    }
  return (
    <div className='outer-main'>
        <div className="p-5 my-5 shadow col-lg-4 col-sm-12 col-md-6 main-div bg-info bg-opacity-10"  id="sign-up">
        
        <h3 className="mt-4 text-center">Create New Account</h3>
        <form onSubmit={handleSignup}>
            <div className="mb-4 mt-3"> 
                <input type="text" className="form-control" id="username" placeholder="Username" name="username" onChange={handleUsername} />
            </div>
            <div className="mb-4 mt-3">
                <input type="email" className="form-control" id="email" placeholder="Email" name="email" onChange={handleEmail} />
            </div>
            <div className="mb-4">
                <input type="password" className="form-control" id="pwd" placeholder="Password" name="pswd" onChange={handlePwd} />
            </div>
            <div className="mb-4">
                <input type="password" className="form-control" id="confirm_pwd" placeholder="Confirm Password" name="confirm_pwd" />
            </div>
            <div className="form-check mb-4">
                <label className="form-check-label ">
                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                </label>
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-4">Sign Up</button>
          </form>
        <p >Already have an account? <Link to="/login">LogIn</Link></p>
    </div>
    </div>
  )
}
