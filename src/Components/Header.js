import React from 'react'

const Header = () => {
  return (
    <div className='header p-3 d-flex justify-content-between'>
        <div>
          Header
        </div>
        <div>
            <i className="fas fa-shopping-cart fa-xl"></i> &nbsp;
              Cart
        </div>
    </div>
  )
}
export default Header;