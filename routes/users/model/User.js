const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  email: String,
  name: String,
  token: Number,
});

module.exports = mongoose.model("User", UserSchema);
