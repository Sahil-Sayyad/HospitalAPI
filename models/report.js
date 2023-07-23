//imports all required packages 
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    status:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    doctor:{
        type:String,
        required:true
    },
    patient:{
        type:String,
        required:true
    },
   
},
{
    timestamps:true,
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;