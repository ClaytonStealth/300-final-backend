const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    unique: true,
  },
  password: String,
  email: {
    type: String,
  },
  aitoken: Number,
  orders: Array,
});

module.exports = mongoose.model("User", UserSchema);
