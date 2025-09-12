const express = require("express")
const cors = require('cors');

const app  = express()

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

app.get("/sum", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString())
})

app.get("/interest", function(req,res){
    const principal = req.query.principal;
    const rate = req.query.rate;
    const time = req.query.time;

    const interest = (principal * rate * time);
    const total = principal + interest;

    res.send({
        total:total,
        interest:interest
    })
})

app.listen(3000)