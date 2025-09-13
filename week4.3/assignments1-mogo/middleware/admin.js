const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
  try {
    const username = req.headers["username"];
    const password = req.headers["password"];

    if (!username || !password) {
      return res
        .status(400)
        .json({ msg: "Missing username or password in headers" });
    }

    const admin = await Admin.findOne({ username, password });
    if (admin) {
      next();
    } else {
      res.status(403).json({ msg: "Admin doesn't exist!" });
    }
  } catch (err) {
    console.error("Middleware error:", err);
    res.status(500).json({ msg: "Internal server error" });
  }
}

module.exports = adminMiddleware;
