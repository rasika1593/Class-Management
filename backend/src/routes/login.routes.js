module.exports = (app)=> {
    const login = require('../controller/loginController');
    app.post('/login', login.checkUser)
}