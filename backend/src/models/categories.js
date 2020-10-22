const mongoose = require('mongoose'); 

const CategoriesSchema = mongoose.Schema({
    cat_name:String,
    cat_desc:String,
    is_active:Boolean
});

module.exports = mongoose.model('Categories',CategoriesSchema);