const express = require("express");
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();
// setting config path and port for back end
dotenv.config = ({path: 'config.dnv'});
const PORT = process.env.PORT || 8081

// log  request 
app.use(morgan('tiny'))
// creating req and res function
app.get('/', (req, res)=>{
    res.send("CRUD Application");
});

// listening server and call back function
app.listen(PORT, ()=>{
    console.log(`Server is running on port. http://localhost:${PORT}`);
})