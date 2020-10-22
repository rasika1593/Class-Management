const usersModel = require("../models/registration")
const bcrypt = require("bcrypt")

exports.create = async (req, res) => {
    try{
        let validUser = await usersModel.findOne({ email_id: req.body.email_id });
        if(validUser){
            return res.status(200).send(
                {
                    message:"That user already exisits!",
                    success:false,
                    statusCode:400,
                }
            );
        }else{
            const hash = await bcrypt.hashSync(req.body.password, 10)
            const user = new usersModel({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email_id: req.body.email_id,
                password: hash,
                user_role: req.body.user_role
            })
            user.save().then(data=>{
                res.status(200).send({
                    message:"Register successfully",
                    success:true,
                    statusCode:200,
                    data:data
                });
            })
        }
    } catch (error){
        throw error
    }
}