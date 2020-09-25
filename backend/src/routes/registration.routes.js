module.exports = (app) => {
    const users = require('../controller/registrationController');
    app.post('/create', users.create);
}