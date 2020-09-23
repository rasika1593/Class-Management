const userModel= require("../models/user");

exports.create = (req, res) => {
    console.log("In controller");
    const user = new userModel({
        fname: req.body.fname, 
        lname: req.body.lname
    });
    user.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred"
        });
    });
};