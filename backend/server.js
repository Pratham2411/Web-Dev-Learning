const app=require("./src/app")

app.get("/",(req,res)=>{
   res.send("Hello, response sent !");
})

app.get("/about",(req,res)=>{
   res.send("Welcome to About Page");
})

app.listen(3000); // start server on port 3000


// node server.js start run
