const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));


const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://pratik:Pass1234@cluster0.wh9fpqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const post_route = require('./routes/postRoute');
app.use('/api', post_route);


app.listen(8000, function(){
    console.log("Server is Running")
});



