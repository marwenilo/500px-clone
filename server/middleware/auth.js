const { User } = require("../models/User");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  //Check if not token
  if (!token) {
    return res.status(403).json({ msg: "No token, authoriwation denied" });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(403).json({ msg: "Token is not valid" });
  }
};
module.exports = { auth };