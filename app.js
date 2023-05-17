const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.bodyParser());

mongoose.connect('mongodb://localhost/Company');

const mySchema = new mongoose.Schema({
    _id : String,
    name : String,
    age : Number
});

// check if application is successfullyb connected to mongodb server
const db = mongoose.connection('mongodb://localhost/Company');
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=>{
    // all your database operations here
})

app.listen(8080, ()=>{
    console.log('server is running at port 8080')
})

// creating a collection of emp and binding it with the schema mySchema
const user = mongoose.model('emp', mySchema);