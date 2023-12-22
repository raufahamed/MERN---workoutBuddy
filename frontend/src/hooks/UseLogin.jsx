import { useState } from 'react'
import {UseAuthcontext} from './UseAuthcontext'

export const useLogin = ()=>{
    const [error,setError] = useState(null)
    const [isLoading,setIsloading] = useState(false)
    const {dispatch} = UseAuthcontext()

    async function login({email,password}){
    setIsloading(true)
    setError(null)
    const response = await fetch('http://localhost:3030/api/user/login',{
     
      method :'POST',
      headers : {'Content-Type':'application/json'},
      body:JSON.stringify({email,password})

    })
    const json = await response.json()
    if (!response.ok) {
        console.log(json.message)
        setIsloading(false)
        setError(json)
    }
    if (response.ok) {
        // save the user to local storage
        localStorage.setItem('user',JSON.stringify(json))

        //update the auth context
        dispatch({type:'LOGIN',payload:json})
        setIsloading(false)
    }
}

return {login,isLoading,error}

}

