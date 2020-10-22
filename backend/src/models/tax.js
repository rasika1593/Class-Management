const mongoose = require('mongoose');

const TaxSchema = mongoose.Schema({
    financialYear:Number,
    age: Number ,
    income:Number,
    investment:Number,
    tax:Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Tax', TaxSchema);