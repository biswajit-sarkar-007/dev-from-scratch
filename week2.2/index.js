// express http server

const express = require("express"); // used here express liberies instant

const bodyParser = require("body-parser");

const app = express(); // call the express function into convert it in app object
const port =   3000;

// middlewares
app.use(bodyParser.json());

app.post("/post", function (req, res) {
  //console.log(req.headers);
  console.log(req.body);

  res.send("hello world");
});

app.listen(port, function () {
  console.log(`server is listening on port ${port}`);
});
