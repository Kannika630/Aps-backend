const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())


app.post("/login",(req,res)=>{
    const username = req.body.username;
    const userDetails = new User({
        username:username
    })
    userDetails.save()
    .then(()=>{res.send("success")})
    .catch(()=>{res.send("didnt save")})
    
})

app.listen(3000,(req,res)=>{
    console.log("server started");
})