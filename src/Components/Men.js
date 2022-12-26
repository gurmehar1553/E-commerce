import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';
import Header from './Header';
import { getCardData } from '../server';

const Men = ({items,setItems}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const promise = axios.get('/addToCart')
        promise.then((ele) => {
            setData((ele.data).filter(e => {
                return e.category === "men's clothing"
            }))
        })
    },[])
    useEffect(()=>{
        getCardData().then(res => setItems(res))
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

export default Men;