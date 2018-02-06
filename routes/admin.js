const  express = require('express');
const router = express.Router();
const {Category} = require('../models/category');

router.get('/', function(req, res, next) {
  res.render('admin/login')
});

router.get('/home',async(req,res)=>{
	var result = await Category.find();
	console.log(result)
	res.render('admin/home',{ title: 'AboutMedicine' , data: result})
})

module.exports = router;
