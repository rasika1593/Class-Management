const userModel = require("../models/registration")
const bcrypt = require("bcrypt")

exports.checkUser =  (req, res) =>{
    try{
    let status=false
    const user = userModel.find({
        email_id:req.body.email_id
    }).then(data=>{
       if(data.length!==0){
            status =  bcrypt.compareSync(req.body.password, data[0].password)
        }
        if(status===true){
            data[0].password="**********"
        }
        if(status === true && user){
            res.status(200).send({
                message:"login successfully",
                success:true,
                statusCode:200,
                data:data[0]
            });
        }else{
            res.status(401).send({
                message:"Wrong credentials",
                success:false,
                statusCode:401,
                data:{}
            });
        }
        
    })
   
    if (!user) return error('Username is incorrect');
    }catch (error){
        throw error
    }
}