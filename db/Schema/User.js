const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  usertype: String,
  firstname: String,
  lastname: String,
  email: String,
  phoneno: Number,
  password: String,
  gender: String,
});
module.exports = mongoose.model("users", userSchema);
