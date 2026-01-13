// handling and working with forms
// handle backend process of data coming from any frontend lib,framwork or engine

// npm i cookie-parser

// data reading middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

 app.use(function(req,res,next){
    console.log('middleware chala');
    next();
 });
app.get("/",function(req,res){
    res.send('Hello World')
})
app.get("/profile",function(req,res){
    res.send('This is my profile ')
})



app.listen(3000)