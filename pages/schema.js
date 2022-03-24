const mongoose = require('mongoose');

const Register =mongoose.Schema;

const portfolio=new Register({
    Name:{
        type:String,
        required:true
    },
    DateOfBirth:{
        type:String,
        required:true
    },
    FatherName:{
        type:String,
        required:true
    },
    MotherName:{
        type:String,
        required:true
    },
    Contact:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Religion:{
        type:String,
        required:true
    },
   
    Hobbies:{
        type:String,
        required:true
    },
    School:{
        type:String,
        required:true
    },
    College:{
        type:String,
        required:true
    },
    Engineering:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('portfolio',portfolio);