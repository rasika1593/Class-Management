const productModel = require("../models/products")

exports.createProduct = async (req, res) => {
    try{
        console.log("request",req.body)
        const product = new productModel({
            title: req.body.title,
            description: req.body.description,
            brandName: req.body.brandName,
            price: req.body.price,
            availableCount: req.body.availableCount,
            categoryName: req.body.categoryName,
            categoryId: req.body.categoryId
        })
        console.log("product",product)
        product.save().then(data=>{
            res.status(200).send({
                message:"Product created successfully",
                success:true,
                statusCode:200,
                data:data
            });
        })
    }
    catch (error){
        throw error
    }
};

exports.productList = async (req,res)=>{
    try{
        productModel.find()
            .then(data=>{
                res.status(200).send({
                    message:"Products fetch Successfully",
                    success:true,
                    statusCode:200,
                    data:data[0]
                });
            })
            .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving products."
                });
              });
    }
    catch (error){
        throw error
    }
};