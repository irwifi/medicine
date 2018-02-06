const env = process.env.NODE_ENV;
let confg;
if(env === undefined) {
	confg = require('./confg_default');
} else {
	confg = require('./confg_' + env.trim());
}
 
module.exports = confg;