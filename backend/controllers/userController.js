const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, { expiresIn: '3d' })
  }

// login user
const loginUser = async (req,res)=>{
    res.json('login')
}

// signup user
const signupUser = async (req,res)=>{
    const {email, password} = req.body

    try {
      const user = await User.signup(email, password)

        // create a token
    const token = createToken(user._id)
  
      res.status(200).json({token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginUser,
    signupUser
}