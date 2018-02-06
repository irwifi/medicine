"use strict";
const mongoose = require('mongoose');
const confg = require('../confg/confg');

// make mongo db connection
mongoose.Promise = global.Promise;
mongoose.connect(confg.mongo.url + confg.mongo.db);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Connected to MongoDb Server');
});

module.exports = db;
