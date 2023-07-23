//imports all required packages 
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    doctor:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unquie:true,
    },
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
        min:0
    },
    address :{
        type:String,
    },
    reports:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Report'
    }],
    
},
{
    timestamps:true,
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;