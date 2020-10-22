const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({"message": "Welcome"});
});

mongoose.connect("mongodb://localhost:27017/classManagement",(error)=>{
  if(!error){
    console.log("connected")
  }else{
    console.log("not connected")
  }
})

// const registration = require("./src/routes/registration.routes");

// app.use("api/v1",registration)

require('./src/routes/user.routes')(app);
require('./src/routes/registration.routes')(app);
require('./src/routes/login.routes')(app);
require('./src/routes/tax.routes')(app);
require('./src/routes/categories.route')(app);
require('./src/routes/product.routes')(app);


app.listen(8000, () => {
  console.log('listening on port 8000!')
});
