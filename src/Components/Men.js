import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';
import Header from './Header';

const Men = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const promise = axios.get('https://fakestoreapi.com/products')
        promise.then((ele) => {
            setData((ele.data).filter(e => {
                return e.category === "men's clothing"
            }))
        })
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
                            />
                })
            }
      </div>
    </>
  )
}

export default Men;