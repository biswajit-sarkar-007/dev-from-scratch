const express  = require("express")

import {BACKEND_URL} from "@repo/common/config"

const app  = express();

console.log(BACKEND_URL);


app.get("/", function(req :any, res:any) {
    res.send("hello world 2.2")
})

app.listen(3000, ()=>{
    console.log("server is listeing on port 3000");
    
})