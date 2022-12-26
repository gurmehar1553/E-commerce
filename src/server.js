import axios from 'axios'
const URL = 'http://localhost:3050'

const login = async (newObject) => {
    const request = await axios.post(URL+'/login' , newObject)
    return request.data
}

const signup = async (newObj) => {
    const req = await axios.post(URL+'/signup',newObj)
    return req.data
}

export  {login,signup}