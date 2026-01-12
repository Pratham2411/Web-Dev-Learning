// express js is a npm package

// framework-> flow
// manages everything from reciving request 

// setting a basic express application

const express=require('express')
const app=express();
// creating routes
// .get(route,requestHandler)
app.get("/",function(req,res){
    res.send('Hello World')
})
app.get("/profile",function(req,res){
    res.send('This is my profile ')
})
// server chalao
app.listen(3000)
// npm i nodemon -g 
// one time install(global install hai ye)
//  npx nodemon script.js
// ab server auto reftesh ho jayega any changes pe
