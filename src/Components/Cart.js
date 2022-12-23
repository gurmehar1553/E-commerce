import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCardData, removeAllItems } from '../server'
import AuthContext from '../utils/AuthProvider'
import Card from './Card'
import CartItems from './CartItems'
import Header from './Header'

const EmptyCart = () => {
  return (
    <>
      <div className='container m-5 p-5 bg-warning bg-opacity-25'>
        <div className='row'>
            <div className='col-md-6'>
                <img src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png" alt='' width="100%" />
            </div>
            <div className='col-md-6 my-5 py-5'>
                <h1>Your cart is empty</h1> 
                <p> Looks like you have not added anything to your cart.</p>
                <Link to='/main' className='btn btn-primary'>Explore different sections</Link>
            </div>
        </div>
      </div>
    </>
  )
}

const CartWithoutLogin = () => {
    return (
      <>
        <div className='container m-5 p-5 bg-warning bg-opacity-25'>
        <div className='row'>
            <div className='col-md-6'>
                <img src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png" alt='' width="100%" />
            </div>
            <div className='col-md-6 my-5 py-5'>
                <h1>You are currently logged out!</h1> 
                <p> Kindly login to add items in your cart or Create an account if you are a new user</p>
                <Link to='/login' className='btn btn-primary m-3'>Login</Link>
                <Link to='/signup' className='btn btn-info'>Signup</Link>
            </div>
        </div>
      </div>
      </>
    )
}

const Cart = () => {
  const [items, setItems] = useState([])
  const [data, setData] = useState([])
  const {auth,currUser} = useContext(AuthContext)
  
  useEffect(() => {
    if(currUser !== null) {
    console.log(currUser.cartArray)
    getCardData().then(res => setItems(res))
  }
  },[])

  if(!auth){
      return <CartWithoutLogin />
    }
  const removeAll = async () => {
    setItems([])
    await removeAllItems()
  }
  return (
    <>
      <Header />
      {
        items.length===0 &&  <EmptyCart />
      }
        <div className='container m-5'>
        <div className='col-md-2 float-end'>
        {
          items.length!==0 && <div><button className='btn btn-warning my-3' onClick={removeAll}>Remove all items from cart</button>  <Link to='/order' state={{from : items}} className='btn btn-danger'>Proceed To Payment</Link></div>
        }
          
        </div>
        <div className='d-flex flex-row justify-content-around flex-wrap cart-outer'>
          {
            items.map((i,id) => {
              return <CartItems allItems={i} items={items} setItems={setItems} key={id+"hnji"} />
            })
          }
        </div>
      </div>
      
    </>
  )
}

export default Cart