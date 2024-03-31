var express = require('express');
var router = express.Router();
var Blog = require("../model/blog.model.js");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const list = await Blog.find();
    res.render('error', { list: list  });
  }catch(err){
    next(error);
  }
});

module.exports = router;
