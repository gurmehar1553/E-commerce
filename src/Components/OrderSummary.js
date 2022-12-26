import React, { useEffect, useState } from 'react'
import Header from './Header'

const OrderSummary = () => {
    const [price, setPrice] = useState()
    const [items, setItems] = useState([])
    useEffect(()=>{
        if(localStorage.getItem("CartItems")){
         const arr = JSON.parse(localStorage.getItem("CartItems"))
         console.log(arr)
         setItems([...arr])
         console.log(items)
       }
       
    },[])

    if(items.length && !price){
        var tp = 0;
       console.log(items)
       items.forEach(i => {
        console.log(parseFloat(i.cardData.price))
         tp += (parseFloat(i.qty))*(parseFloat(i.cardData.price))
         console.log(tp)
       })
       setPrice(tp)
       } 
  return (
    <>
        <Header />
        <div className='bg-warning bg-opacity-10 mx-auto p-5 d-flex flex-column justify-content-center align-items-center ' style={{width:"50%"}}>
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