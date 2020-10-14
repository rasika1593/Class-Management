const userModel = require("../models/registration")

exports.checkUser = (req, res) =>{
   // console.log("in login controller",req)
    const user = userModel.find({
        $and:
        [{email_id:req.body.email_id},
        {password:req.body.password}]
        
    }).then(data=>{
        if(data.length!==0){
        res.send({
            statusCode:200,
            message:"user loggedIn successfully",
        })
    }else{
        res.send({
            statusCode:400,
            message:"Please check username or password.",
        }) 
    }
    })
   
    if (!user) return error('Username or password is incorrect');
}