const express = require("express");
const router = express.Router();
const  {auth}= require("../middleware/auth");

const { register, login, getUser, logout } = require("../controllers/users");

/**
 * @api /register
 * @method POST
 * @description creates a user
 */
router
.post("/register", register)
  /**
   * @method GET
   * @api /login
   * @description get user after auth
   */
.get("/login",auth, getUser)
  /**
   * @method POST
   * @api /login
   * @description create token and give access
   */
.post("/login", login)

  /**
   * @method GET
   * @api /logout
   * @description remove token
   */
.get("/logout", auth, logout);

module.exports = router;
