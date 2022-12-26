import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header p-3 d-flex justify-content-between'>
        <div>
          
        </div>
        <div className='d-flex justify-content-around' style={{width:"500px"}}>
            <div><Link className='text-black text-decoration-none' to='/women'>Women</Link></div>
            <div><Link className='text-black text-decoration-none' to='/men'>Men</Link></div>
            <div><Link className='text-black text-decoration-none' to='/jewellery'>Jewellery</Link></div>
            <div><Link className='text-black text-decoration-none' to='/electronics'>Electronics</Link></div>
            <Link to='/cart' className='text-black text-decoration-none'>
              <i className="fas fa-shopping-cart fa-xl text-black"></i> &nbsp;
              Cart
            </Link>
        </div>
    </div>
  )
}
export default Header;