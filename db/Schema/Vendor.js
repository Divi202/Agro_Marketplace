const { default: mongoose } = require("mongoose");

const vendorSchema = mongoose.Schema({
  usertype: String,
  firstname: String,
  lastname: String,
  email: String,
  phoneno: Number,
  password: String,
  gender: String,
});
module.exports = mongoose.model("vendors", vendorSchema);
