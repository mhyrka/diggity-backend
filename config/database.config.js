const uri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/diggity';
const mongoose = require('mongoose');
mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
db.once('open', console.info.bind(console, 'mongodb successfully connected:'));

module.exports = {mongoose, db}
