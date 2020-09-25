const userModel = require("../models/registration")

exports.checkUser = (req, res) =>{
   // console.log("in login controller",req)
    const user = userModel.find({
        email_id:req.body.email_id
    }).then(data=>{
        console.log("data in then",data);
        res.send(data)
    })
   
    if (!user) return error('Username or password is incorrect');
}