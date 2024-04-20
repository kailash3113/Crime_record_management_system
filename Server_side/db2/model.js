const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conna = require('./dba');

conna.connectToMongooseDB();


const SignupSchema = new Schema({
    Name: {
        type: String,
        required : [true, "Name is required"]
    },
    Date: {
        type: String,
        required : [true, "Date is required"]
    },
    Aadhar: {
        type: Number,
        required : [true, "Aadhar is required"]
    },
    Time: {
        type: String,
        required : [true, "Time is required"]
    },
    Location: {
        type: String,
        required : [true, "Location is required"]
    },
    Category: {
        type: String,
        required : [true, "Category is required"]
    },
    Address: {
        type: String,
        required : [true, "Address is required"]
    },
    Policestationregion:{
        type: String,
        required:[true,"Region is required"]
    },
    Policestationname: {
        type: String,
        required : [true, "Police station name is required"]
    },
    fatherhusbandname:{
          type: String,
          required:[true,"Father/Husband name is required"]
    },
    Nationality: {
        type: String,
        required : [true, "Nationality is required"]
    },
    Passportnumber: {
        type: Number,
        required : [false, "passport is required"]
    },
    Description: {
        type: String,
        required : [true, "Description is required"]
    }
});

const SignupCollection = mongoose.model("keraladb", SignupSchema);




module.exports = {SignupCollection}; 