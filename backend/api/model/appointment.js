const mongoose = require("mongoose");
var conn = mongoose.Collection;
var appointmentSchema = new mongoose.Schema({
    careTakerId : {
        type: mongoose.Schema.Types.ObjectId, ref: 'careTaker'
    },
    patientName:{
        type:String,
    },
    doctorEmail: {
        type: String,
    },
    doctorName: {
        type:String
    },
    contact: {
        type: String,
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    status: {
        type: String,
    }
},
{ timestamps: true }
);

var appointment=mongoose.model('appointment', appointmentSchema);
module.exports=appointment;