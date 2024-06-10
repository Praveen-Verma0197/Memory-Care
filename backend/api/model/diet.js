const mongoose = require("mongoose");
var conn = mongoose.Collection;
var dietSchema = new mongoose.Schema(
  {
    carTakerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "careTaker",
    },
    title: {
      type: String,
    },
    type: {
      type: String,
    },

    food_diet: {
      type: String,
    },
    eat_schedule: {
      type: Date,
    },
    diet_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

var Diet = mongoose.model("Diet", dietSchema);
module.exports = Diet;
