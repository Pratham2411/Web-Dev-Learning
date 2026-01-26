// initialise a project with npm
// npm init -y (package.json file)
// express install
// npm i express (package-lock.json)

const express= require('express');
const app=express();
const path = require('path'); 


// setting up parsers for form
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// setting up public static files
app.use(express.static(path.join(__dirname,'public')));
// setting up ejs for ejs pages
//  npm i ejs
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index") // in view
})

app.get("/home",function(req,res){
    res.render("home") // in view
})
// we can make it dynamic bt applying (:) after dynamic part
app.get("/profile/:username",function(req,res){
    res.send(` welcome,${req.params.username}`)
})
// now username is dynamic
app.listen(3000,function(){
    console.log("it's running")
})
// run npx nodemon script.js

// dynamic routing:- when only one pattern change in routes we use dyn,routing

