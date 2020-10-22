const categoryModel = require("../models/categories")

exports.createCategory = ( req, res )=>{

    const category = new categoryModel({
        cat_name:req.body.cat_name,
        cat_desc:req.body.cat_desc,
        is_active:true
    })
    category.save().then(data=>{
        res.status(200).send({
            message:"Category created Successfully",
            success:true,
            statusCode:200,
            data:data


        });
    })
}

exports.categoryList= (req, res) =>{
    try{

        categoryModel.find()
            .then(data=>{
                res.status(200).send({
                    message:"Categories fetch Successfully",
                    success:true,
                    statusCode:200,
                    data:data[0]
                });
            })
            .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving categories."
                });
              });

    }
    catch(error){
        throw error
    }
}