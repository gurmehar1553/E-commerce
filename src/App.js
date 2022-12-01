import React from "react";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import {Route,Routes} from 'react-router-dom'
import  Main  from './Components/Main'
// import {login,signup} from './server'

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path='/main' element={<Main />}></Route>
            </Routes>
        </>
    )
}

export default App;