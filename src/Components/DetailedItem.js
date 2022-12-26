import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AuthContext from '../utils/AuthProvider';
import Header from './Header'

const DetailedItem = ({items, setItems}) => {
  const [size,setSize] = useState("small");
  const [qty, setQty] = useState("1");
  const {auth} = useContext(AuthContext)

    const location = useLocation()
    const { from } = location.state
    console.log(location)
    let condition = items && (items.map(i => {return JSON.stringify(i.cardData)})).includes(JSON.stringify(from))
  const addToCart = () => {
    if(auth){
      console.log(condition)
      if(!condition){
        const newObj = {
          cardData: from,
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
                        return JSON.stringify(e.cardData)!== JSON.stringify(from)
                      })
        setItems(updatedItems)
        localStorage.setItem('CartItems',JSON.stringify(updatedItems))
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
        <Header/>
        <div className='container p-5 m-3'>
            <div className='row justify-content-around'>
                <div className='col-md-5'>
                    <img src={from.image} alt='' height="530px" width="90%" />
                </div>
                <div className='col-md-7'>
                    <h1>{from.title}</h1>
                    <p>{from.description}</p>
                    <p><b>Price: </b>$ {from.price}</p>
                    <p><b>Rating: </b>{from.rating.rate}</p>
                    <p><b>Count left: </b>{from.rating.count}</p>
                    <b>Size : </b>
                    <select className='form-select form-select-sm' onChange={selectSize}>
                        <option value="small">S</option>
                        <option value="med">M</option>
                        <option value="large">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                    <br/>
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
                    <button className='btn btn-primary m-3' onClick={addToCart}><i className="fas fa-shopping-cart fa-xl add-cart"></i>
                        {condition? "Remove From Cart" : "Add To Cart"}
                    </button>
                    <Link to='/order' state={{from : items}} className='btn btn-danger m-3'>
                        Proceed To Payment
                    </Link>
                    

                </div>
                
            </div>
            <div className='row justify-content-around'>
                
            </div>
        </div>
    </>
  )
}

export default DetailedItem