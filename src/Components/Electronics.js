import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getCardData } from '../server'
import Card from './Card'
import Header from './Header'

const Electronics = ({items,setItems}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const promise = axios.get('/addToCart')
        promise.then((ele) => {
            setData((ele.data).filter(e => {
                return e.category === "electronics"
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