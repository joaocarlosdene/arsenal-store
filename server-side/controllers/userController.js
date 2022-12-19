import userModel from "../models/userModel.js"


//Login User
export const loginUser = async (req, res) =>{
    res.json({mssg:'login user'})
}

//SignUp User
export const signupUser = async (req, res) =>{
    res.json({mssg:'signup user'})
}