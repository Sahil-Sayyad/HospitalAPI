//import all required packages 
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
    },
    patients:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }]
},
{
    timestamps:true,
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;