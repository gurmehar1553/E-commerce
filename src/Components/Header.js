import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { setToken, verifyAuth } from '../server';
import AuthContext from '../utils/AuthProvider'



const Header = () => {
  const {auth,setAuth,setCurrUser} = useContext(AuthContext)
  const navigate = useNavigate()


  const LoginSignup = () => {
    return (
      <>
          <Link to='/signup' className='btn btn-dark btn-main'>SignUp</Link>
          <Link to='/login' className='btn btn-warning btn-main'>Login</Link>
      </>
    )
  }

  const Logout = () => {
    const handleLogout=()=>{
      setAuth(false)
      setToken('')
      setCurrUser(null)
      navigate('/main')
    }
    return (
      <>
          <button onClick={handleLogout} className='btn btn-dark btn-main'>Logout</button>
      </>
    )
  }
  

  return (
    <div className='header p-3 d-flex justify-content-center'>
        {/* <div>
          
        </div> */}
        <div className='d-flex justify-content-around header-main' style={{width:"60%"}}>
            <div><Link className='text-black text-decoration-none header-nav active' to='/main'>Home</Link></div>
            <div><Link className='text-black text-decoration-none header-nav' to='/women'>Women</Link></div>
            <div><Link className='text-black text-decoration-none header-nav' to='/men'>Men</Link></div>
            <div><Link className='text-black text-decoration-none header-nav' to='/jewellery'>Jewellery</Link></div>
            <div><Link className='text-black text-decoration-none header-nav' to='/electronics'>Electronics</Link></div>
            { (auth)? <Logout /> : <LoginSignup />}
            <Link to='/cart' className='text-black text-decoration-none'>
              <i className="fas fa-shopping-cart fa-xl text-black"></i> &nbsp;
              Cart
            </Link>
        </div>
    </div>
  )
}
export default Header;