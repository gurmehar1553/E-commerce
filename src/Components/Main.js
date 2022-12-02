import React, { createContext, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const cartItems = createContext()
const setCartItems = createContext()

const Main = () => {
  return (
    <>
      <Header />
      <Link to='/women'>Women's Section</Link><br/>
      <Link to='/men'> Men's Section</Link><br/>
      <Link to='/jewellery'>Jewellery Section</Link><br/>
      <Link to='/electronics'> Electronics Section</Link><br/>
    </>
  )
}

export default Main
