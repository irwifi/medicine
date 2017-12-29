const mongoose = require('mongoose');
var ElementSchema = mongoose.Schema({
	elementName: {
		type: String,
		required: true,
		unique: true
	},
	top: {
		type: Number,
		required: true
	},
	left: {
		type: Number,
		required: true
	},
	size: {
		type: Number,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	page: {
		type: String,
		required: true
	},
	status: {
		type: Number,
		required: true
	}
});

var Elements= mongoose.model('Element',ElementSchema);

module.exports = {Elements};
