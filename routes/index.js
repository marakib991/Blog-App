const multer = require("multer");
var express = require('express');
var router = express.Router();
var Blog = require("../model/blog.model.js");
const FormData = require("../model/form.model.js")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', (req,res)=>{

  const newBlog = new Blog({
    title: req.body.title,
    description: req.body.description,
  });

  newBlog.save();
  res.redirect('/users');
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/')
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name)
  }
})

const upload = multer({ storage: storage })

router.get('/register', (req, res, next)=>{
  res.render("form", {})
})

router.post('/register', upload.single("img") , async (req, res)=>{
  try{
    const FormDataModel = new FormData({
      username: req.body.username,
      ProfilePicture: req.file.filename,
    });
    
    await FormDataModel.save()
    res.status(202).send('File is uploaded')
  }catch(err){
    console.log("Problem in index post register: ");
    console.log(err.message);
  }
})

module.exports = router;
