const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  userName: String,
  userEmail: String,
  userPass: String
});
module.exports = mongoose.model("User", userSchema, "UserData");
