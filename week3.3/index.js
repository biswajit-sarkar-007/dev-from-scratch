// middleware

const express = require("express");

const app = express();

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 18) {
    next();
  } else {
    res.json({
      msg: "Sorry you are not of age yet",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have sucessfully eligable for the ride.",
  });
});

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You are sucesfully eligable for ride 2",
  });
});
app.listen(3000);
