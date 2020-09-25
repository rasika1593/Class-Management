module.exports = (app)=> {
    console.log("qqqqqqqqqqqqqqqqq")
    const login = require('../controller/loginController');
    app.post('/login', login.checkUser)
}