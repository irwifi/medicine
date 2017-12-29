var express = require('express');
var router = express.Router();
var {Elements} = require('../models/element');
var _ = require('lodash');

/* GET home page. */
router.get('/', async(req, res) =>  {
	 var result = await Elements.find({'status': 1});//.select({ "elementName": 1, "_id": 0});
  	res.render('index', { title: 'AboutMedicine', data: result});
});

module.exports = router;
