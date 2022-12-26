import axios from 'axios'
const URL = 'http://localhost:3050'

let token = null
const localToken = window.localStorage.getItem('authToken')
const setToken = (jwt) => {
    token = `bearer ${jwt}`
    window.localStorage.setItem('authToken',jwt)
}

if(localToken){
    setToken(localToken)
}

const login = async (newObject) => {
    const request = await axios.post(URL+'/login' , newObject)
    // console.log(request)
    return request.data
}

const signup = async (newObj) => {
    const req = await axios.post(URL+'/signup',newObj)
    return req.data
}

const verifyAuth = async () => {
    const res = await axios.get(URL + '/login', {headers: {Authorization : token }})
    return res.data
}

export  {login,signup,verifyAuth}