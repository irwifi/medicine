"use strict";
const mongoose = require('mongoose');

const hmodels = {};

// count the number of models
hmodels.count_doc = (err, params, callback) => {
	params.doc.model.count(params.doc.condition, (err, doc_count) => {
		params.doc.doc_count = doc_count;
		hmodels.error_handler(err, params, callback);
	});
};

// create document 
hmodels.create_doc = (err, params, callback) => {
	params.doc.model.create(params.doc.doc_data, (err, doc_info) => {
		params.doc.doc_info = doc_info;
		hmodels.error_handler(err, params, callback);
	});
};

// fetch distinct doc
hmodels.distinct_doc = (err, params, callback) => {
	params.doc.model.distinct(params.doc.select, params.doc.condition, (err, doc_info) => {
		params.doc.doc_info = doc_info;
		hmodels.error_handler(err, params, callback);
	});
};

// error handler 
hmodels.error_handler = (err, params, callback) => {
	if(err) { return callback(err); }
	else {
		if ( params.async_level !== undefined && params.async_level > 0 ) {
			params.async_level -= 1;
			if(params.async_level === 0) {
				delete params.async_level;
			}
			callback(err, err, params);
		} else {
			callback(null, params);
		}
	}
};

// find documents
hmodels.find_doc = (err, params, callback) => {
	const model = params.doc.model;
	model.find(params.doc.condition, params.doc.select, params.doc.options , (err, doc_info) => {
		params.doc.doc_info = doc_info;
		hmodels.error_handler(err, params, callback);
	});
};

// find one document
hmodels.find_one = (err, params, callback) => {
	const model = params.doc.model;
	model.findOne(params.doc.condition, params.doc.select, params.doc.options , (err, doc_info) => {
		params.doc.doc_info = doc_info;
		hmodels.error_handler(err, params, callback);
	});
};

// find one and update
hmodels.find_one_and_update = (err, params, callback) => {
	params.doc.model.findOneAndUpdate(params.doc.condition, {$set: params.doc.doc_data}, params.doc.options, (err, doc_info) => {
		params.doc.doc_info = doc_info;
		hmodels.error_handler(err, params, callback);
	});
};

// save document
hmodels.save_doc = (err, params, callback) => {
	const new_instance = new params.doc.model(params.doc.doc_data);
	new_instance.save((err, doc_info) => {
		params.doc.doc_info = doc_info._doc;
		hmodels.error_handler(err, params, callback);
	});
};

// update document
hmodels.update_doc = (err, params, callback) => {
	params.doc.model.update(params.doc.condition, {$set: params.doc.doc_data}, params.doc.options, (err, update_info) => {
		params.doc.update_info = update_info;
		hmodels.error_handler(err, params, callback);
	});
};

module.exports = hmodels;
