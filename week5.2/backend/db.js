const moongose = require("mongoose")
 

moongose.connect("yourr-mongodb-url")

const todoSchema =  moongose.Schema({
    title: String,
    description:String,
    completed:Boolean
})

const todo = moongose.model("todos", todoSchema)

module.exports =  {
     todo
}
  
 