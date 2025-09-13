const express = require("express")

const cors = require("cors")

const app = express()
 
app.use(cors({
    origin:'http://127.0.0.1:5500'
}))

const todos = [
     {
        id:1,
        title:"Go to gym",
        description:"Go to gym at 7:30pm"
    },
    {
        id:2,
        title:"Go to college",
        description:"Go to college at 9:00am"
    }
]

app.get("/todos", function(req,res){
    res.json(todos)
})

app.listen(3000)