const express = require('express');

const app = express();

//ROUTES
app.get('/',(req,res) =>{
    res.send('we are on home')
})

//how to start listening to the server
app.listen(3000);
