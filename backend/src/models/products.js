const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    brandName: String,
    price: Number,
    availableCount: Number,
    categoryName: String,
    categoryId: Number
},{
    timestamps: true
});

module.exports = mongoose.model('Products',productSchema);