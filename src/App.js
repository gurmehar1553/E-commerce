import React, { useContext, useEffect, useState } from "react";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import {Navigate, Route,Routes} from 'react-router-dom'
import  Main  from './Components/Main'
import Cart from "./Components/Cart";
import Women from "./Components/Women";
import Men from "./Components/Men";
import Jewellery from "./Components/Jewellery";
import Electronics from "./Components/Electronics";
import DetailedItem from "./Components/DetailedItem";
import OrderSummary from "./Components/OrderSummary";
import AuthContext, { AuthProvider } from "./utils/AuthProvider";
import { getCardData } from "./server";

const App = () => {
    const [items, setItems] = useState([])
    const {auth,currUser} = useContext(AuthContext)
    console.log(currUser)
    useEffect(()=>{
        // getCardData().then(res => setItems(res))
        if(auth){
            setItems(currUser.cardData)
        }
      },[])
    return ( 
        <>
            
                <Routes>
                    <Route path="/" element={<Navigate to="/main" />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/main" element={<Main />}></Route>
                    <Route path="/women" element={<Women items={items} setItems={setItems} />}></Route>
                    <Route path="/men" element={<Men items={items} setItems={setItems} />}></Route>
                    <Route path="/jewellery" element={<Jewellery items={items} setItems={setItems} />}></Route>
                    <Route path="/electronics" element={<Electronics items={items} setItems={setItems} />}></Route>
                    <Route path="/details" element={<DetailedItem items={items} setItems={setItems} />}></Route>
                    <Route path="/order" element={<OrderSummary items={items} />}></Route>
                </Routes>
            
        </>
    )
}

export default App;