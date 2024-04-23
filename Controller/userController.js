



const register =async(req,res) =>{
  res.status(200).json('register function')
  }


  const getUser =async(req,res) =>{
    res.status(200).json('getuser route')
    }
  
  
  module.exports = {register, getUser}