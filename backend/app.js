const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')



const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

mongoose.connect("mongodb://localhost:27017/classManagement",(error)=>{
  if(!error){
    console.log("connected")
  }else{
    console.log("not connected")
  }
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
