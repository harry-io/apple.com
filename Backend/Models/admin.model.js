const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    title: String,
    category: String,
    image: String,
    price: String,
    specs:Array,
    dtlimage:Array,
    userID:String
  },
  {
    versionKey: false,
  }
);

const  adminModel = mongoose.model("adminProduct", adminSchema);


module.exports = { adminModel };