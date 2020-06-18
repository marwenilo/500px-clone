const { User } = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//=================================
//             User
//=================================

const getUser = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    _id: user.id,
    isAdmin: user.role === 0 ? false : true,
    isAuth: true,
    email: user.email,
    name: user.name,
    lastname: user.lastname,
    role: user.role,
    image: user.image,
  });
  console.log(user);
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Save to MySQL database
    user = new User({
      name,
      email,
      password,
    });
    //Crypt password
    const salt = await bcrypt.genSalt(10);
    // remember to check the kind of the id after the salt so i can user the right type between the front and the db
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    console.log(user, "create user");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // if the user exists****

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        errors: [
          {
            msg: "Invalid Credentials",
          },
        ],
      });
    }
    console.log(user, "user login back2");

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(user.password, "user password back");
    if (!isMatch) {
      return res.status(400).json({
        errors: [
          {
            msg: "Invalid Credentials",
          },
        ],
      });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, "jwtSecret", { expiresIn: 3600000 }, (err, token) => {
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const logout = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { token: ""}
    );
console.log(user)
    return res.status(200).send({
      success: true,
    });
  } catch (error) {
    return res.json({ success: false, error });
  }
};
module.exports = {
  register,
  login,
  getUser,
  logout,
};
