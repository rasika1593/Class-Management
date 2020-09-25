const usersModel = require("../models/registration")

exports.create = (req, res) =>{
    console.log("in registration controller")

    const user = new usersModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email_id: req.body.email_id,
        password: req.body.password,
        user_role: req.body.user_role
    })
    user.save().then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occurred"
        })
    })
}