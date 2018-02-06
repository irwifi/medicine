const express = require('express');
const router = express.Router();
const {Category} = require('../models/category');
const _ = require('lodash');

router.post('/post', async(req, res) => {
 const body = _.pick(req.body, ['catName', 'top', 'left', 'size', 'color', 'page', 'status']);
 const newCategory = new Category(body);
 const result = await newCategory.save();

 if(result) {
 	res.status(200).send({message: 'Data Saved'});
 } else  {
 	res.status(400).send();
 }
});

module.exports = router;
