const express = require("express");
const app = express();
const port = 3000;
let users = [{
    name:"amit",
    age:26
}]
// read
app.get("/",(req,res)=>{
    res.send(users)
    res.send("OK get it");
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})