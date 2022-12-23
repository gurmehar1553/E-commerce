import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteFromCart, handleAddToCart } from '../server';
import AuthContext from '../utils/AuthProvider';

const CartItems = ({allItems,items,setItems}) => {
    const [size,setSize] = useState(allItems.size);
  const [qty, setQty] = useState(allItems.qty);
  const {auth,currUser} = useContext(AuthContext)
  let condition = true
    const addToCart = async () => {
      if(auth){
        console.log(condition)
        console.log(allItems.cardData)
        const newObj = {
            cardData: allItems.cardData,
            size : size,
            qty : qty,
            currUser: currUser
          }
          console.log(newObj)
        if(!condition){
          
          const res = await handleAddToCart(newObj)
          console.log("Response from cart ",res)
          console.log(items)
          const newItems = [...items,newObj]
          setItems(newItems)
          localStorage.setItem('CartItems',JSON.stringify(newItems))
          
        }
        else{
          const res = await deleteFromCart(newObj)
          console.log(res)
          const updatedItems = items.filter(e => {
                          return JSON.stringify(e.cardData)!== JSON.stringify(allItems.cardData)
                        })
          setItems(updatedItems)
        }
        condition = !condition
      }
      else{
        alert("Kindly login your account to add items in the cart!")
      }
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
              <Link to='/details' state={{ from : allItems.cardData}} className='btn btn-warning mx-1 '>View</Link>
                <button className='btn btn-dark' onClick={addToCart}><i className="fas fa-shopping-cart fa-xl add-cart"></i>
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