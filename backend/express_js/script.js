// express js is a npm package

// framework-> flow
// manages everything from reciving request 

// setting a basic express application

const express=require('express')
const app=express();
// creating routes
// .get(route,requestHandler)

// app.get("/",function(req,res){
//     res.send('Hello World')
// })
// app.get("/profile",function(req,res){
//     res.send('This is my profile ')
// })
// server chalao
// app.listen(3000)

// npm i nodemon -g 
// one time install(global install hai ye)
//  npx nodemon script.js
// ab server auto reftesh ho jayega any changes pe

// middleware
// jab server request accept keta hai to uske route tk reach krne se phle kuch perfor krte ho to elemebt ko middleware bolte h
 app.use(function(req,res,next){
    console.log('middleware chala');
    next();
    // next req forward karta h
 });
 // you can make more than one middleware
app.get("/",function(req,res){
    res.send('Hello World')
})
app.get("/profile",function(req,res){
    res.send('This is my profile ')
})

// error handling
app.get("/about",function(req,res,next){
    return next(new Error("ye msg console pe aayega"))
    res.send('This is my profile ')
})
// error handler
app.use(function(err,req,res,next){
    console.error(err.stack)
    res.status(500).send('error aaya re!!')
})
app.listen(3000)