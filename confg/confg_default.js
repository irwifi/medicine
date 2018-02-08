const confg = require('./confg.all');

// default configuration
// confg.env = 'example_env';
// confg.hostname = 'example_host';
// confg.mongo.url = 'example_test';
// confg.mongo.db = 'example_db';

// configuration
confg.env = 'development';
confg.hostname = 'localhost:27017';
confg.mongo.url = 'mongodb://heroku_pq49qhwc:rprmg9m41hlr1ca42bk0kra25l@ds135547.mlab.com:35547/';
confg.mongo.db = 'heroku_pq49qhwc';

module.exports = confg;
