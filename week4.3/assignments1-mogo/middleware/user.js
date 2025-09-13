// Middleware for handling auth

const {User} = require("../db")

async function userMiddleware(req, res, next) {
  try {
    
    const username = req.headers["username"]; 
    const password = req.headers["password"]; 

    if (!username || !password) {
      return res.status(400).json({ msg: "Missing username or password in headers" });
    }

    const admin = await User.findOne({ username, password });
    if (admin) {
      next();
    } else {
      res.status(403).json({ msg: "User doesn't exist!" });
    }
  } catch (err) {
    console.error("Middleware error:", err);
    res.status(500).json({ msg: "Internal server error" });
  }
}

module.exports = userMiddleware;