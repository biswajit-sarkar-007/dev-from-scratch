
// DATABASES
// How does the backend connect to the database?
//1.Express lets u create an HTTP server
//2. Json Web Token libary lets you create jets
//3. Mongoose lets you connect to your database

const express = require("express")
 const mongoose = require('mongoose');
const app =express();
app.use(express.json())

// here used your mogodb instance/ clustor username and password

mongoose.connect('mongodb+srv://<db_username>:<db_password>@cluster0.abc0gk.mongodb.net/newuser');


 

const  User = mongoose.model('Users', { name: String, email: String });

app.post("/signup", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser =  await User.findOne({email:username});

    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name,
        email:username,
        password:password
    });

    user.save();
    res.json({
        msg:"User created sucessfully!"
    })
}) 


app.listen(3000)