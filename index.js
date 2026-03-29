// console.log("Hello World");
// console.log("This is a simple Node.js application.");
let express = require('express');
let app = express();

app.get("/",(req,res)=>{
    res.send({status : 1 , msg : "Home Page"})
})
app.get("/news",(req,res)=>{
    res.send({status : 2 , msg : "News Page"})
})

app.listen("8000")