const confg = require('./confg.all');

// configuration 
confg.env = 'test';
confg.hostname = 'localhost:3000';
confg.mongo.url = 'mongodb://localhost/';
confg.mongo.db = 'mileage_manager_test';
 
module.exports = confg;