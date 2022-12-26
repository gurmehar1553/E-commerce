import React, { useState } from "react";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import {Route,Routes} from 'react-router-dom'
import  Main  from './Components/Main'
import Cart from "./Components/Cart";
import Women from "./Components/Women";
import Men from "./Components/Men";
import Jewellery from "./Components/Jewellery";
import Electronics from "./Components/Electronics";
// import {login,signup} from './server'

const App = () => {
    const [cartItems , setCartItems] = useState([])

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path='/main' element={<Main />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/women" element={<Women cartItems setCartItems />}></Route>
                <Route path="/men" element={<Men cartItems setCartItems />}></Route>
                <Route path="/jewellery" element={<Jewellery cartItems setCartItems />}></Route>
                <Route path="/electronics" element={<Electronics cartItems setCartItems />}></Route>
            </Routes>
        </>
    )
}

export default App;