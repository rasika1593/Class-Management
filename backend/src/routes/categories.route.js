module.exports = (app)=> {
    const category = require('../controller/categoriesController');
    app.post('/createCategory', category.createCategory);
    app.get('/categoryList',category.categoryList)
}


//  module.exports = (app) =>{
//     const categoryList = require('../controller/categoriesController');
//     app.post('/categoryList',categoryList.c)
//  }