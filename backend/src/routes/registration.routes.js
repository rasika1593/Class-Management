module.exports = (app) => {
    const users = require('../controller/registrationController');
    app.post('/register', users.create);
}