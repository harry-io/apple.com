const mongoose = require("mongoose");

const ipadSchema = mongoose.Schema(
  {
    title: String,
    category: String,
    image: String,
    price: String,
    dtlimage:Array
  },
  {
    versionKey: false,
  }
);
let ipadModel = new mongoose.model("ipad", ipadSchema);
module.exports = { ipadModel };
