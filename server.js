const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())


app.post("/login",(req,res)=>{
   res.send("success")
})

app.listen(3000,(req,res)=>{
    console.log("server started");
})
