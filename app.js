const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//import routes
const postRoute = require('./routes/posts');
app.use('/posts',postRoute);

//ROUTES
app.get('/',(req,res) =>{
    res.send('we are on home')
});

//connect to db

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tony:mongodb606606@cluster0-omidw.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("CarParkingData").collection("CarParkingData");
  // perform actions on the collection object
  client.close();
  console.log('connect to db');
});

    


app.get('/posts',(req,res) =>{
    res.send('we are on post')
});


//how to start listening to the server
app.listen(3000);
