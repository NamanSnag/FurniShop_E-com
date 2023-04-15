const express = require('express');
require('dotenv').config()
// const db = require('./config/mongoose');
const port = process.env.PORT || 8000;
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const app = express();

//middleware
app.use(express.json());

// cookie
app.use(cookieParser());

// urlencoded add to extract data from
app.use(express.urlencoded());

// routes
app.use('/', require('./route'));

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500;
    const message = err.message || 'Something went wrong';
    return res.status(errorStatus).json({
        succcess: false,
        status: errorStatus,
        message: message,
        stack: err.stack
    })
});

app.listen(port,(err) => {
    if(err){
        console.log("error occure during listning to servar"+err);
    }
    console.log("server running on port", port);
})