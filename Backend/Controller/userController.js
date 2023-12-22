const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id)=>{

    return  jwt.sign({_id},process.env.SECRET,{ expiresIn:'3d'})
}
console.log(process.env.SECRET);

const loginUser = async(req,res)=>{
    
    const {email,password} = req.body 
    try {
      
        const user = await User.login(email,password)
          
        //create a token
          const token = createToken(user._id)
          res.status(200).json({email,token})
          
      }catch(error){
          
          res.status(400).json({message:error.message,status:'error'})
          console.log(error);
      }


}
const signupUser = async(req,res)=>{
    const {email,password} = req.body 

    try {
      
      const user = await User.signup(email,password)
        
      //create a token
        const token = createToken(user._id)
        console.log(token);
        res.status(200).json({email,token})    
    }catch(error){
        console.log(error);
        res.status(400).json({message: error.message, status: "error"})
    }

}

module.exports = {
    
    signupUser,
    loginUser
    
}
