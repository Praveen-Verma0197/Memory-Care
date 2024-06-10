const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
  care_taker_ID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CareTaker', // Assuming you have a CareTaker model
    required: true
  },
  routine_name: {
    type: String,
    required: true
  },
  description: String,
  // Add other fields as needed
});

const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;
