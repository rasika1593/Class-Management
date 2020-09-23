module.exports = (app) => {
    const user = require('../controller/user');
    app.post('/userCreate', user.create);
}