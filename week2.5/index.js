const express = require("express");

function calSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const app = express();

app.get("/", (req, res) => {
  const n = req.query.n;
  const ans = calSum(n);
  res.send(ans.toString());
});

app.listen(3000, () => {
  console.log("server listennig on port 3000");
});
