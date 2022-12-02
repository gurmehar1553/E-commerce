import React from 'react'

const Card = ({cardData,setCartItems,cartItems}) => {
  
  const addToCart = () => {
    setCartItems([cartItems,cardData.id])
    console.log(cartItems)
  }
  return (
    <div className='m-2'>
        <div className="card card-items shadow my-2 h-100" style={{width : "300px"}}>
            <img className="card-img-top" src={cardData.image} alt="" height="380px" />
            <div className="d-flex card-body justify-content-between">
              <div>
                <h4 className="card-title">$ {cardData.price}</h4>
                <p className="card-text">{cardData.title}</p>
              </div>
              <div>
                <i className="far fa-heart add-fav"></i><br></br>
                <i className="fas fa-shopping-cart fa-xl add-cart" onClick={addToCart}></i>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Card;