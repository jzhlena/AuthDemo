const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose')

app.set('view engine', 'ejs');
app.set('views', 'views');

mongoose.connect('mongodb://localhost:27017/auth-demo', {
});

app.get('/register', (req, res)=>{
    res.render('register');
})

app.post('/register', async(req,res) =>{
    res.send(req.body);
} )

app.get('/secret', (req, res) => {
    res.send('THIS IS SECRET. YOU WILL NOT SEE ME UNLESS YOU LOG IN.')
})

app.listen(3000, ()=>{
    console.log("SERVING YOUR APP!");
})