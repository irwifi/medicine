"use strict";
const express = require('express');
const router = express.Router();
const { Category } = require('../models/category');

/* GET home page. */
router.get('/', (req, res, next) => {
	var result = {}; //await Category.find({'status': 1});//.select({ "elementName": 1, "_id": 0});
	res.render('index', { title: 'AboutMedicine', data: result });
});

module.exports = router;
