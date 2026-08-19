const express = require("express");
const app = express();
const port = 3000;
// middleware
app.use(express.json())
let users = []

// create
app.post("/create",(req,res)=>{
    let body = req.body;
    users.push(body)
    res.send(users);
})

// get - Read
app.get("/",(req,res)=>{
    res.send(users)
    res.send("OK get it");
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})