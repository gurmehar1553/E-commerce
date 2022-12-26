import axios from 'axios'
const URL = '/'

let token = null
const localToken = window.localStorage.getItem('authToken')
const setToken = (jwt) => {
    token = `bearer ${jwt}`
    console.log("token : ",token)
    window.localStorage.setItem('authToken',jwt)
}

if(localToken){
    setToken(localToken)
}

const login = async (newObject) => {
    const request = await axios.post(URL+'login' , newObject)
    // console.log(request)
    return request.data
}

const signup = async (newObj) => {
    const req = await axios.post(URL+'signup',newObj)
    return req.data
}

const verifyAuth = async () => {
    console.log("token : ",token)
    const res = await axios.get(URL + 'login', {headers: {Authorization : token }})
    return res.data
}

const getCardData = async () => {
    const res = await axios.get(URL + 'addToCart/cart', {headers: {Authorization : token }})
    return res.data
}

const handleAddToCart = async (newObj) => {
    const res = await axios.post(URL+'addToCart' , newObj)
    return res.data
}

const deleteFromCart = async (newObj) => {
    const res = await axios.post(URL+'addToCart/remove',newObj)
    return res.data
}

const removeAllItems = async () => {
    const res = await axios.delete(URL+'addToCart/removeAll', {headers : {Authorization : token}})
    return res.data
}

export  {login,signup,verifyAuth,getCardData,handleAddToCart,deleteFromCart,removeAllItems,setToken}