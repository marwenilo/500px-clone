const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  avatar: {
    type: String,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  loginAttempts: {
    type: Number,
    required: true,
    default: 0,
  },
  lockUntil: {
    type: Number,
  },
});

UserSchema.virtual("isLocked").get(function () {
  // check for a future lockUntil timestamp
  return !!(this.lockUntil && this.lockUntil > Date.now());
});
//Mongoose middleware that will automatically hash the password
UserSchema.pre("save", function (next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});
//cb call back
UserSchema.methods.comparePassword = function (condidatePassword, cb) {
  bcrypt.compare(condidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
UserSchema.methods.incLoginAttempts = function(cb) { 
    // if we have a previous lock that has expired, restart at 1 
    if (this.lockUntil && this.lockUntil < Date.now()) {
         return this.update({
              $set: { loginAttempts: 1 }, 
            $unset: { lockUntil: 1 } 
        }, cb); 
        }
     // otherwise we're incrementing 
     var updates = { 
         $inc: { loginAttempts: 1 } 
    }; 
     // lock the account if we've reached max attempts and it's not locked already 
     if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
          updates.$set = { lockUntil: Date.now() + LOCK_TIME }; 
        } return this.update(updates, cb); 
    };




UserSchema.methods.generateToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), "secret");

  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

UserSchema.statics.findByToken = function (token, cb) {
  var user = this;

  jwt.verify(token, "sercet", function (err, decode) {
    user.finOne({ _id: decode, token: toke }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

UserSchema.statics.failedLogin = {
  NOT_FOUND: 0,
  PASSWORD_INCORRECT: 1,
  MAX_ATTEMPTS: 2,
};

// password is incorrect, so increment login attempts before responding
user.incLoginAttempts(function (err) {
  if (err) return cb(err);
  return cb(null, null, reasons.PASSWORD_INCORRECT);
});
const User = mongoose.model("User", userSchema);

module.exports = { User };
