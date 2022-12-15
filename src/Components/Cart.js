import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../utils/AuthProvider'
import Card from './Card'
import CartItems from './CartItems'
import Header from './Header'

const EmptyCart = () => {
  return (
    <>
      <div className='container m-5 p-5 bg-info bg-opacity-25'>
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
        <div className='container m-5 p-5 bg-info bg-opacity-25'>
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
  const {auth} = useContext(AuthContext)
  useEffect(() => {
    if(localStorage.getItem("CartItems")){
      const arr = JSON.parse(localStorage.getItem("CartItems"))
      console.log(arr)
      setItems([...arr])
    }
    const promise = axios.get('https://fakestoreapi.com/products')
         promise.then(ele => {
            setData(ele.data)
        })
        .catch(e => e.message)
  },[])

  if(!auth){
      return <CartWithoutLogin />
    }
  const removeAll = () => {
    setItems([])
    localStorage.clear("CartItems")
  }
  console.log(items)
  console.log(data)
  const newArr = data.filter(e => {
    let flag=false
    items.forEach(i => {
      if(JSON.stringify(i.cardData) === JSON.stringify(e) ){
        flag=true
        console.log(i)
      }
    })
    return flag
  })
  console.log(newArr)
  return (
    <>
      <Header />
      {
        items.length===0 &&  <EmptyCart />
      }
        <div className='container m-5 bg-info bg-opacity-25'>
        <div className='col-md-2 float-end'>
        {
          items.length!==0 && <div><button className='btn btn-warning my-3' onClick={removeAll}>Remove all items from cart</button>  <Link to='/order' state={{from : items}} className='btn btn-danger'>Proceed To Payment</Link></div>
        }
          
        </div>
        <div className='d-flex flex-row justify-content-around flex-wrap'>
          {
            items.map(i => {
              return <CartItems allItems={i} items={items} setItems={setItems} />
            })
          }
        </div>
      </div>
      
    </>
  )
}

export default Cart