const User = require('../model/userModel')
// login user
const loginUser = async (req,res)=>{
    res.json('login')
}

// signup user
const signupUser = async (req,res)=>{
    const {email, password} = req.body

    try {
      const user = await User.signup(email, password)
  
      res.status(200).json({user})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginUser,
    signupUser
}