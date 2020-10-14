module.exports = (app) => {
    const tax = require('../controller/taxController');
    app.get('/tax_info', tax.info);
    app.post('/createTax',tax.createTax);
    app.get('/allTax',tax.allTax);
}