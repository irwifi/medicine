"use strict";
const MongoClient = require('mongodb').MongoClient;
const confg = require('../confg/confg');

const hdb = {};

// make mongoDb connection
hdb.connect = (err, params, callback) => {
	MongoClient.connect(confg.mongo.url + confg.mongo.db,
		(err, database) => {
	  		if(err) {
	  			console.log('MongoDb connection error');
	  		} else  {
	  			hdb.db = database;
	  			console.log('Connected to Mongo Db Server');
	  		}
	  		callback(err);
	 });
};

module.exports = hdb;
