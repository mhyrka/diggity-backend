const express = require('express')
const bodyParser = require('body-parser')
const app = express();
// const profiles = require('./db/model.js')
// const routes = require('./app/routes/profile.routes.js')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const mongoose = require('mongoose');

// console.log('server running')
//
//
// mongoose.connect('mongodb://localhost:27017/diggity')
// .then(() => {
//     console.log("Successfully connected to the database");
//
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...');
//     process.exit();
// });

// app.use('/', routes)


// define a simple route
app.get('/', (req, res) => {
    res.json({message: "Welcome to diggity. Connecting people via pets."});

});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
