import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CartItems = ({allItems,items,setItems}) => {
    const [size,setSize] = useState(allItems.size);
  const [qty, setQty] = useState(allItems.qty);
    let condition = items && (items.map(i => {return JSON.stringify(i.cardData)})).includes(JSON.stringify(allItems.cardData))
  const addToCart = () => {
    console.log(condition)
    if(!condition){
      const newObj = {
        cardData: allItems.cardData,
        size : allItems.size,
        qty : allItems.qty
      }
      console.log(items)
      const newItems = [...items,newObj]
      setItems(newItems)
      localStorage.setItem('CartItems',JSON.stringify(newItems))
      
    }
    else{
      const updatedItems = items.filter(e => {
                      return JSON.stringify(e.cardData)!== JSON.stringify(allItems.cardData)
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
    <>
        <div>
            <div>
            <div className="card card-items shadow my-2 h-100" style={{width : "300px"}}>
            <img className="card-img-top" src={allItems.cardData.image} alt="" height="300px" />
            <div className="d-flex flex-wrap card-body justify-content-between">
              <div>
                <h4 className="card-title">Total Price : $ {(allItems.cardData.price) * (parseInt(allItems.qty))}</h4>
                <p className="card-text">{allItems.cardData.title}</p>
              </div>
              <div>
                <i className="far fa-heart add-fav"></i><br></br>
              </div>
              <div>
              <b>Size : </b>
              <b>Selected size : {allItems.size}</b>
              <h6>Change Size:</h6>
              <select className='form-select form-select-sm' onChange={selectSize}>
                        <option value="small">S</option>
                        <option value="med">M</option>
                        <option value="large">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
              </select>
              <b>Quantity : </b>
              <b>Selected Quantity : {allItems.qty}</b>
                <h6>Change Quantity:</h6>    <select className='form-select form-select-sm' onChange={selectQty}>
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
              <Link to='/details' state={{ from : allItems.cardData}} className='btn btn-info mx-1 '>View</Link>
                <button className='btn btn-primary' onClick={addToCart}><i className="fas fa-shopping-cart fa-xl add-cart"></i>
                    {condition? "Remove From Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
        </div>
            </div>
        </div>
    </>
  )
}

export default CartItems