import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:5000'})
export const logIn=(authData)=> API.post('/use/login',authData)
export const singUp=(authData)=> API.post('/use/singUp',authData)