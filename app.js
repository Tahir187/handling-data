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

const user = mongoose.model('emp', mySchema);