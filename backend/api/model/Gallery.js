const mongoose = require("mongoose");
var conn = mongoose.Collection;
var gallerySchema = new mongoose.Schema({
    patientId : {
        type: mongoose.Schema.Types.ObjectId, ref: 'careTaker'
    },
    image: {
        type: String,
    },
    message: {
        type: String,
    }
},
{ timestamps: true }
);

var Gallery = mongoose.model('Gallery', gallerySchema);
module.exports = Gallery;