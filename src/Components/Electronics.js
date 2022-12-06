import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Header from './Header'

const Electronics = ({items,setItems}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const promise = axios.get('https://fakestoreapi.com/products')
        promise.then((ele) => {
            setData((ele.data).filter(e => {
                return e.category === "electronics"
            }))
        })
    },[])
    useEffect(()=>{
        if(localStorage.getItem("CartItems")){
            const arr = JSON.parse(localStorage.getItem("CartItems"))
            console.log(arr)
            setItems([...arr])
          }
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
                            setItems={setItems}
                            items={items}
                            />
                })
            }
      </div>
    </>
  )
}


export default Electronics