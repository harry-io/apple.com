const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
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

const  produtModel = mongoose.model("product", productSchema);


module.exports = { produtModel };
