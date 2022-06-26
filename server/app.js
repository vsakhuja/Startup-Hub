const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const db = process.env.mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to database'))
    .catch(err => console.log(err));


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const approval = require('./routes/approval/approval')
const login = require('./routes/login/login')
const decision = require('./routes/decision/decision')

app.get('/', (req, res) => {
    res.send("hello world")
})

app.use('/approval', approval)
app.use('/login', login)
app.use('/decision', decision)

app.listen(5000, (err) => {
    console.log(err)
})