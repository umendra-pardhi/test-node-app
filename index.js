const express=require("express")

const app=express()

app.get('/',(req,res)=>{
    res.send("hello from node js server!")
})

app.listen(80,()=>{
    console.log("server started on port 80")
})