const mongoose = require('mongoose');
var CategorySchema = mongoose.Schema({
	catName: {
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
		type: String,
		required: true
	}
});

var Category= mongoose.model('category',CategorySchema);

module.exports = {Category};
