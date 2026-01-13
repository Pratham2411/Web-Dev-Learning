// handling and working with forms
// handle backend process of data coming from any frontend lib,framwork or engine

// npm i cookie-parser

app.use(express.json());
app.use(express.urlencoded({extended:true}));
