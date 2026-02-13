// npm init -y initiate node js app
// npm i express install express package

// server ko create karna
const express=require('express');
const app=express(); // server instance create
app.use(express.json()) // middleware
const notes=[] // use database for it

// (/notes) pe frontend se data aayega req me
app.post('/notes', (req, res) => {
    // console.log(req.body);
    notes.push(req.body)
    res.status(201).json({
        message:"note created sucessfully"
    })
});

app.get('/notes', (req, res) => {
    res.status(200).json({
        message:"notes fetched sucessfully",
        notes:notes
    })
});

app.delete('/notes/:index', (req, res) => {
    const index=req.params.index
    delete notes[index]
    res.status(200).json({
        message:"note deleted sucessfully",
    })
 
});

app.patch('/notes/:index', (req, res) => {
    const index=req.params.index
    const description=req.body.description
    notes[index].description=description
    res.status(200).json({
        message:"note updates sucessfully",
    })
 
});
// npx nodemon server.js no need to restart server
module.exports=app
