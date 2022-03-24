const express = require('express');

const app = express();

app.use(express.static('pages'));

const Portfolio = require('./pages/schema');

app.use(express.json());

app.use(express.urlencoded({extended:false}));

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://devivaraprasad:dsp9391@cluster0.syjej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>{
    console.log('connected to mongodb');
});

const connection = mongoose.connection;

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/pages/index.html');

});

app.get('/getdata',(req,res)=>{
    Portfolio.findOne({Name:'DEVI VARA PRASAD REDDY KADIMISETTI'},function(err,result){
        if(err || result==null)
        {
            console.log("hiiii")
            console.log(err)
        }
        else if(result!=undefined)
        {
            console.log("hi")
            console.log(result)
            res.send(result);
        }
    })
});

app.listen(3000,()=>console.log('Server Started at 3000!'));

