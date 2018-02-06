const confg = require('./confg.all');

// configuration
confg.env = 'development';
confg.hostname = 'localhost:3000';
confg.mongo.url = 'mongodb://localhost/';
confg.mongo.db = 'medicine';

module.exports = confg;
