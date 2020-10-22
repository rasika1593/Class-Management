module.exports = (app)=> {
    console.log("check2");
    const product = require('../controller/productController');
    app.post('/createProduct', product.createProduct);
    app.get('/productList', product.productList)
}