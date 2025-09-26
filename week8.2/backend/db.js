const moongose = require("mongoose")
 
 

moongose.connect("your-mongodb-connection-string/paytm")

const userSchema = new moongose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});


const accountSchema = new moongose.Schema({
    userId: {
        type: moongose.Schema.Types.ObjectId,  
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});
const User = moongose.model("User", userSchema)
const Account = moongose.model("Account", accountSchema)
module.exports = {
    User,
    Account
}