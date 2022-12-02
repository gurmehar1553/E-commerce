import React, {  useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Header from './Header'

const Women = ({cartItems, setCartItems}) => {
    // const [cartItems , setCartItems] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        const promise = axios.get('https://fakestoreapi.com/products')
         promise.then(ele => {
            setData((ele.data).filter(e => {
                return e.category === "women's clothing"
            }))
        })
        .catch(e => e.message)
    },[])
  return (
    <>
        <Header />
        <div className='d-flex justify-content-around flex-wrap p-5 m-5'>
        {
            data.map((e)=>{
                return <Card 
                        cardData={e}
                        key={e.id+'ok'}
                        setCartItems={setCartItems}
                        cartItems={cartItems}
                        />
            })
        }
      </div>
    </>
  )
}
export default Women