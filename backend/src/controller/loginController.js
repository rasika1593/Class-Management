const userModel = require("../models/registration")

exports.checkUser = (req, res) =>{
   // console.log("in login controller",req)
    const user = userModel.find()
    //console.log("uqw",user)
    //res.send(user)
    res.json(user)
    if (!user) return error('Username or password is incorrect');
}