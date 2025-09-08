// middlewares and global catches
// input validation

 
// run every part of code separtely becasue app has same name every part and  express should be require only one time in a file not mulitple time , if u run the whole index.js file it will shown the error , so try to run its separatley or just commend on rest of the part ..

const express = require("express")

const app = express()

app.get("/", function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != "biswa" || password != "pass"){
        res.status(400).json({msg:"something went wrong with your inputs"});
        return;
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({msg:"Somtings up with your inputs"})
    }

    res.json({msg:"Your kidney is fine"})
})

app.listen(3000)

// --------------------------------------------------

const express = require("express")

const app  = express()

app.get("/", function(req,res, next){
    console.log("hi there req1");
    next()
}, function(req,res,next){
    console.log("hi there req2");
    next()

}, function(req,res){
    console.log("hi there req3");

})
app.listen(3000)

// -------------------------------------------------

const express = require("express")

const app = express()

let  requestNew = 0;
function calRequest(req,res,next){
    requestNew++;
    console.log(requestNew);

    next();
}

app.get("/", calRequest, function(req,res){

}
)

app.listen(3000)

// ----------------------------------------------------

const express = require("express")

const app = express()

app.use(express.json())

app.post("/", function(req,res){
    // kidney=[1,2,3]
    const kidney = req.body.kidney;
    const kidneyLength = kidney.length;

    res.send("You have " + kidneyLength + " kidneys");
})

// global catches
app.use(function(err, req,res,next){
    res.json({
        msg:"Sorry u passed wrong inputs to the bodys"
    })
})

app.listen(3000)


//-------------------------------------------------------
// how can we do better input validatio n

const express = require("express");
const zod = require("zod");
const app = express();

 

const schema = zod.array(zod.number());
 
app.use(express.json());

app.post("/", (req, res) => {
  const kidneys = req.body.kidney;
  const response = schema.safeParse(kidneys);
 if (!response.success){
    res.status(411).json({
        meg:"input is invalid"
    })
 }
  res.send({
    response
  });
});

app.listen(3000);

//------------------------------------------------------------
// zod example

const zod = require("zod");

function validateInput(arr) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().max(7),
  });

  const response = schema.safeParse(arr);
  console.log(response);
}
validateInput({
  email: "test@gmail.com",
  password: "abdfgdf",
});

//--------------------------------------------------------------------------
// Authentication

const z = require("zod")
const schema = z.string().email();
const response = schema.parse("test@gmail.com")

console.log(response);


// -----------------------------------------------------------


const express = require("express")

const app = express()
app.get("/", function(req,res){

    const kidneys = req.body.kidneys.length;
    res.json({
        msg:"done!"
    })
})
 
// global catches
app.use(function(err,req,res,next){
    res.send({
        msg:"Internal server error!"
    })
})

app.listen(3000)
