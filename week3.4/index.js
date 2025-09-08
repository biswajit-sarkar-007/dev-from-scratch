// Jwt
//             email, password
//Your Chatgpt ----------------->Backend Server
// login page  <----------------of chatgpt
//                jwt
// 1.generating a jwt
//2. decoding it : anyone can do
//3.veryfing it : only backedn server verfy it

const jwt = require("jsonwebtoken");

const value = {
  name: "biswajit",
  accountNumber: 12121323421,
};

// "secret"  is the real hashing key

const token = jwt.sign(value, "secret");
// jwt.verify( token..  ..., "secret")

console.log(token);


// try -catch error

try{
let a ;
console.log(a.length());
}catch(e){
console.log("inside the catch statement");
}
 
console.log("outside the catch statement");

 

