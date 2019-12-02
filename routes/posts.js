const express = require('express');

const router = express.Router();
const Post = require('../models/Post');
router.get('/',(req,res) =>{
     res.send('we are on post')
});

router.post('/',(req, res) =>{
    res.json();
    
})
module.exports = router;