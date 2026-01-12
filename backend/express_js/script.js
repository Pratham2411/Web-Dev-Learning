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
    res.send('This is my profile section')
})
// server chalao
app.listen(3000)