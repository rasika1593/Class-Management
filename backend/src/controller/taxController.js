let taxModel=require('../models/tax')

exports.info=(req,res)=>{
    let data ={
        "2018": {
            "maxInvestmentAllowed": 100000,
            "cess": 0.01,
            "cessApplicableTax": 500000,
            "seniorAge": 60,
            "seniorRebate": 0,
            "slabs": [
                {
                    "min": 0,
                    "max": 100000,
                    "tax": 0
                },
                {
                    "min": 100001,
                    "max": 500000,
                    "tax": 0.1
                },
                {
                    "min": 500001,
                    "max": 1000000,
                    "tax": 0.2
                },
                {
                    "min": 1000001,
                    "max": "Infinity",
                    "tax": 0.3
                }
            ]
        },
        "2019": {
            "maxInvestmentAllowed": 150000,
            "cess": 0.02,
            "cessApplicableTax": 500000,
            "seniorAge": 60,
            "seniorRebate": 50000,
            "slabs": [
                {
                    "min": 0,
                    "max": 100000,
                    "tax": 0
                },
                {
                    "min": 100001,
                    "max": 600000,
                    "tax": 0.1
                },
                {
                    "min": 600001,
                    "max": 1200000,
                    "tax": 0.2
                },
                {
                    "min": 1200001,
                    "max": "Infinity",
                    "tax": 0.3
                }
            ]
        },
        "2020": {
            "maxInvestmentAllowed": 200000,
            "cess": 0.05,
            "cessApplicableTax": 500000,
            "seniorAge": 60,
            "seniorRebate": 75000,
            "slabs": [
                {
                    "min": 0,
                    "max": 100000,
                    "tax": 0
                },
                {
                    "min": 100001,
                    "max": 1000000,
                    "tax": 0.15
                },
                {
                    "min": 1000001,
                    "max": "Infinity",
                    "tax": 0.25
                }
            ]
        }
    }
    res.send({
        success:true,
        statusCode:200,
        object:data})
}

exports.createTax=(req,res)=>{
let tax= new taxModel({
    financialYear:req.body.financialYear,
    age:req.body.age,
    income:req.body.income,
    investment:req.body.investment,
    tax:req.body.tax
});
tax.save().then(()=>{
    res.send({
        statusCode:200,
        success:true,
        message:"Data saved successfully!!!"
    })
}).catch(err=>{
    res.send({
        statusCode:400,
        success:false,
        message:err
    })
})
}

exports.allTax=(req,res)=>{
let data=taxModel.find().then(d=>{
    res.send(d)
});

}