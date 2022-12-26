import React, {  useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Header from './Header'
import { getCardData } from '../server'

const Women = ({items,setItems}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const promise = axios.get('/addToCart')
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
                        setItems={setItems}
                        items={items}
                        />
            })
        }
      </div>
    </>
  )
}
export default Women