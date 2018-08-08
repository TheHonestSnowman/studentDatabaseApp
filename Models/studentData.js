// create a model for the student data

var mongoose = require("mongoose");

// define the model
var studentSchema = new mongoose.Schema({
    studentID: String,
    image: String,
    unitOne: Number,
    unitTwo: Number,
    unitThree: Number,
    studentClass: String, 
    year: Number
});

// return the complete model
module.exports = mongoose.model("Student", studentSchema);