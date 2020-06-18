
const { User } = require("../models/User");

//=================================
//             User
//=================================

const getUser= (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
};

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save()
    res.json(user)
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.json({ success: false, err });
  }
};

const login =  async(req, res) => {
//  console.log(req.body.email)
  try {
  const user =  await User.findOne({ email: req.body.email })
   
  // , (err, user) => {
      if (!user)
        return res.json({
          loginSuccess: false,
          message: "Auth failed, email not found",
        });

      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch)
          return res.json({ loginSuccess: false, message: "Wrong password" });

        user.generateToken((err, user) => {
          res.cookie("w_authExp", user.tokenExp);
          
          res.cookie("w_auth", user.token).status(200).json({
            loginSuccess: true,
            userId: user._id,
          });
          console.log(user.token)
        });
      });
      console.log(user.token)
    // });
    // res.json(user, user.token)
  } catch (error) {
    return res.status(400).send(err);
  }
};

const logout = async (req, res) => {
  try {
   const user= await User.findOneAndUpdate(
      { _id: req.user._id },
      { token: "", tokenExp: "" }
    )
 
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
  logout
};
