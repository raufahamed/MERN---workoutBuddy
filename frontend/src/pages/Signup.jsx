import React, { useState } from 'react'
import { useSignup } from '../hooks/Usesignup'
  function Signup() {
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const {signup,error,isLoading} = useSignup()
console.log(useSignup());

    const handleSubmit = async (e) =>{
    e.preventDefault();
   
   await signup ({email,password})
        console.log(error)
}

    return (
    <form className='signup' onSubmit={handleSubmit}>
     <h3>Sign up</h3>
     <label>Email:</label>
     <input 
     type="text" 
     onChange={(e)=>setEmail(e.target.value)}
     value={email}
     />
     <label>Password:</label>
     <input 
     type="password" 
     onChange={(e)=>setPassword(e.target.value)}
     value={password}
     />
     <button disabled={isLoading}>Sign up</button>
     {error && <div className='error'>{error.message}</div>}
    </form>
  )
}

export default Signup