const mongoose = require("mongoose");

const watchSchema = mongoose.Schema(
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
let watchModel = new mongoose.model("watch", watchSchema);
module.exports = { watchModel };
