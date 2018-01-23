"use strict";
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>  {
	 var result = await Elements.find({'status': 1});//.select({ "elementName": 1, "_id": 0});
  	res.render('index', { title: 'AboutMedicine', data: result});
});

router.get('/admin',async(req,res)=>{
	res.render('admin')
})


router.get('/adminhome',async(req,res)=>{
	var result = await Elements.find();
	console.log(result)
	res.render('adminhome',{ title: 'AboutMedicine' , data: result})
})

module.exports = router;
