const mongoose = require("mongoose");
var conn = mongoose.Collection;
var MedicineSchema = new mongoose.Schema(
  {
    care_taker_ID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "careTaker",
    },
    medicine_name: {
      type: String,
    },
    type: {
      type: String,
    },
    dose: {
      type: String,
    },
    medicine_time: {
      type: String,
    },
    dose: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

var Medicine = mongoose.model("Medicine", MedicineSchema);
module.exports = Medicine;
