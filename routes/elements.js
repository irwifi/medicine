var express = require('express');
var router = express.Router();
var {Elements} = require('../models/element');
var _ = require('lodash');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/ele_post', async(req, res) => {
 var body = _.pick(req.body, ['elementName', 'top', 'left', 'size', 'color', 'page', 'status']);
 var newElement = new Elements(body);
 var result = await newElement.save();

 if(result) {
 	res.status(200).send({message: 'Data Saved'});
 } else  {
 	res.status(400).send();
 }
});

module.exports = router;
