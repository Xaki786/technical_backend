const mongoose = require("mongoose");
const SubscriptionSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  //  picture (type dropdown),
  gender: String,
  dob: Date,
  profession: String,
  shoesize: Number,
  hairColor: String,
  hairLength: String,
  braSize: String,
  waist: Number,
  height: Number,
  weight: Number,
  castings: String,
});
module.exports = mongoose.model("Subscription", SubscriptionSchema);
