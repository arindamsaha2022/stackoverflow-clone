import { redirect } from 'react-router-dom'
import * as api from '../api'
export const singup = (authData, history)=>async(dispatch)=>{
    try {
        const{data}= await api.singUp(authData)
        dispatch({type:'AUTH', data})
        redirect('/')
    } catch (error) {
        console.log(error);
    }
}
export const login = (authData, history)=>async(dispatch)=>{
  try {
      const{data}= await api.singUp(authData)
      dispatch({type:'AUTH', data})
      redirect('/')
  } catch (error) {
      console.log(error);
  }
}
