import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Card = ({cardData,setItems, items}) => {
  const [size,setSize] = useState("small");
  const [qty, setQty] = useState("1");
  // const temItems = items.map(i => {
  //   return JSON.stringify(i);
  // })
  let condition = items && (items.map(i => {return JSON.stringify(i.cardData)})).includes(JSON.stringify(cardData))
  const addToCart = () => {
    console.log(condition)
    if(!condition){
      const newObj = {
        cardData: cardData,
        size : size,
        qty : qty
      }
      console.log(items)
      const newItems = [...items,newObj]
      setItems(newItems)
      localStorage.setItem('CartItems',JSON.stringify(newItems))
      
    }
    else{
      const updatedItems = items.filter(e => {
                      return JSON.stringify(e.cardData)!== JSON.stringify(cardData)
                    })
      setItems(updatedItems)
      localStorage.setItem('CartItems',JSON.stringify(updatedItems))
    }
    condition = !condition
  }
  const selectSize = (e) => {
        setSize(e.target.value)
  }
  const selectQty = (e) => {
    setQty(e.target.value)
  }
  return (
    <div className='m-2'>
        
        <div className="card card-items shadow my-2 h-100" style={{width : "300px"}}>
            <img className="card-img-top" src={cardData.image} alt="" height="300px" />
            <div className="d-flex flex-wrap card-body justify-content-between">
              <div>
                <h4 className="card-title">$ {cardData.price}</h4>
                <p className="card-text">{cardData.title}</p>
              </div>
              <div>
                <i className="far fa-heart add-fav"></i><br></br>
              </div>
              <div>
              <b>Size : </b>
              <select className='form-select form-select-sm' onChange={selectSize}>
                        <option value="small">S</option>
                        <option value="med">M</option>
                        <option value="large">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
              </select>
              <b>Quantity : </b>
                    <select className='form-select form-select-sm' onChange={selectQty}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    </div>
                    <div>
              <Link to='/details' state={{ from : cardData}} className='btn btn-info mx-1 '>View</Link>
                <button className='btn btn-primary' onClick={addToCart}><i className="fas fa-shopping-cart fa-xl add-cart"></i>
                    {condition? "Remove From Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Card;