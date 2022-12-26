import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { verifyAuth } from '../server';
import AuthContext from '../utils/AuthProvider'



const Header = () => {
  const {auth,setAuth,setCurrUser} = useContext(AuthContext)
  const navigate = useNavigate()


  const LoginSignup = () => {
    return (
      <>
          <Link to='/signup' className='btn btn-primary'>SignUp</Link>
          <Link to='/login' className='btn btn-info'>Login</Link>
      </>
    )
  }

  const Logout = () => {
    const handleLogout=()=>{
      localStorage.clear('authToken')
      setAuth(false)
      setCurrUser(null)
      navigate('/main')
    }
    return (
      <>
          <button onClick={handleLogout} className='btn btn-warning'>Logout</button>
      </>
    )
  }
  

  return (
    <div className='header p-3 d-flex justify-content-between'>
        <div>
          
        </div>
        <div className='d-flex justify-content-around' style={{width:"600px"}}>
            <div><Link className='text-black text-decoration-none' to='/women'>Women</Link></div>
            <div><Link className='text-black text-decoration-none' to='/men'>Men</Link></div>
            <div><Link className='text-black text-decoration-none' to='/jewellery'>Jewellery</Link></div>
            <div><Link className='text-black text-decoration-none' to='/electronics'>Electronics</Link></div>
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