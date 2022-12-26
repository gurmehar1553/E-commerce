import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'

const OrderSummary = () => {
    const [data, setData] = useState([])
    const [price, setPrice] = useState()
    const [items, setItems] = useState([])
    // const location = useLocation();
    // const {from} = location.state
    // console.log(from)
    useEffect(()=>{
    //     const promise = axios.get('https://fakestoreapi.com/products')
    //     promise.then(ele => {
    //         console.log(ele.data)
    //         setData(ele.data)
    //     })
    //    .catch(e => e.message)
       if(localStorage.getItem("CartItems")){
        const arr = JSON.parse(localStorage.getItem("CartItems"))
        console.log(arr)
        setItems([...arr])
        console.log(items)
      }
      var tp = 0;
      console.log(items)
      items.forEach(i => {
        tp = parseInt(tp) + parseInt(i.qty)*i.price
        console.log(parseInt(i.qty)*i.price)
      })
      setPrice(tp)
    //    const updatedData = data.filter((d) => {
    //         return from.includes(d.id)
    //     })
    //     console.log(updatedData)
    //     var sum=0;
    //     updatedData.forEach((e)=>{
    //             sum += Math.round(e.price)
    //     })
    //     setPrice(sum)
    //     console.log(sum)
    },[])
    // console.log(data)
  return (
    <>
        <Header />
        <div className='bg-info bg-opacity-10 mx-auto p-5 d-flex flex-column justify-content-center align-items-center ' style={{width:"50%"}}>
            <div className='text-center'>
                <h3>Order Summary</h3>
                <h4>Total number of items : {items.length}</h4>
                <h4>Total Price : ${price}</h4>
            </div>
            <div>
            <form className='d-flex flex-column justify-content-center'>
                <div className='my-3 mx-5'>
                    <label htmlFor="name" className='form-label'>Name*</label>
                    <input type="text" id='name' className='form-control' required/>
                </div>
                <div className='my-3 mx-5'>
                    <label htmlFor="address" className='form-label'>Address*</label>
                    <input type="text" id='address' className='form-control' required/>
                </div>
                <div className='my-3 mx-5'>
                    <label htmlFor="phone" className='form-label'>Phone number 1*</label>
                    <input type="text" id='phone' className='form-control' required/>
                </div>
                <div className='my-3 mx-5'>
                    <label htmlFor='phone2' className='form-label'>Phone number 2</label>
                    <input type="text" id='phone2' className='form-control' />
                </div>
                
                <button className='btn btn-warning'>Proceed to Pay</button>
            </form>
            </div>
        </div>
    </>
    
  )
}

export default OrderSummary