const express = require('express');
const router = require('./routers');
const bookstall = require('./routers/bookstall');
const app = express()
const routes = require('./routers/index')
//Adding body parser

app.use(express.urlencoded({extended:true}))

app.use(express.json());
app.use(function (req, res,next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(8000,()=>{
    console.log("port 8000")
})


app.use('/',routes);
