const mongoose = require("mongoose");

const userschema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    age: Number,
    location: String,
  },
  {
    versionKey: false,
  }
);
let userModel = new mongoose.model("user", userschema);
module.exports = { userModel };
