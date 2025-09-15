const moongose = require("mongoose")
 

moongose.connect("mongodb+srv://biswajitsarkardev_db_user:7VVkDlKmAVIez8xM@cluster0.pgluk0n.mongodb.net/todo_app")

const todoSchema =  moongose.Schema({
    title: String,
    description:String,
    completed:Boolean
})

const todo = moongose.model("todos", todoSchema)

module.exports =  {
     todo
}

 