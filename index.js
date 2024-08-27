const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose')

const bcrypt = require('bcrypt');

app.set('view engine', 'ejs');
app.set('views', 'views');

mongoose.connect('mongodb://localhost:27017/loginDemo')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.send('THIS IS THE HOME PAGE!')
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12)
    res.send(hash);
    console.log(hash);
})

app.get('/secret', (req, res) => {
    res.send('THIS IS SECRET. YOU WILL NOT SEE ME UNLESS YOU LOG IN.')
})

app.listen(3000, () => {
    console.log("SERVING YOUR APP!");
})