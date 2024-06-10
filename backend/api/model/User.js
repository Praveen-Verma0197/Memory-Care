const mongoose = require("mongoose");
var conn = mongoose.Collection;
var userSchema = new mongoose.Schema({
    careTakerId : {
        type: mongoose.Schema.Types.ObjectId, ref: 'careTaker'
    },
    role: {
        type: String,
    },
    name: {
        type:String,
    },
    email: {
        type: String,
    },
    contact: {
        type: Number
    },
    password: {
        type: String
    }
},
{ timestamps: true }
);

var User = mongoose.model('User', userSchema);
module.exports = User;