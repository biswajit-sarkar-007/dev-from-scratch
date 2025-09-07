// read your file data from your machine to server
// this is basicaly a file server  similary the previous doctor server
const express = require("express")


const fs = require("fs")

const app = express()

app.get("/files/:fileName", function(req,res){
    const name = req.params.fileName;
    console.log(name);
    fs.readFile(name, "utf-8", function(err, data){
        res.json({
            data
        })
    })
    
})

app.post("/",function(req,res){
    // write some logic here
})

app.put("/",function(req,res){
    // write some logic here
})

app.delete("/",function(req,res){
    // write some logic here
})

app.listen(3000) 