const express = require("express");
const app = express();
const port = 3000;
// middleware for accepting json data 
app.use(express.json())
let users = []

// create
app.post("/create",(req,res)=>{
    let body = req.body;
    users.push(body)
    res.send("users saved succesfully");
})

// get - Read
app.get("/",(req,res)=>{
    res.send(users)
    res.send("OK get it");
})

// update
app.put("/update/:id",(req,res)=>{
    let {id}=req.params;
    let updatedUser = users.map((val)=>{
        val
    })
    res.send("update hone wala hai")
})
// delete
app.delete("/delete/:id",(req,res)=>{
let {id} = req.params;
let userData = users.filter((val)=>val.id !== id)
users = userData;
res.send(users)

})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})