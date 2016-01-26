var router = require('express').Router();
var models = require('../models/');
var Page = models.Page; 
var User = models.User; 

router.get('/', function (req, res, next) {
	Page.find().exec()
	.then(function(foundPage){
		console.log(foundPage);
		res.render('index',{pages:foundPage});
	})
	.then(null, function(err){
			res.render('error',{message: "Error" , error:err})
	});
});

router.get('/search', function (req, res, next) {
	Page.findByTag(req.query.tags)
	.then(function(foundPage){
		console.log(foundPage);
		res.render('index',{pages:foundPage});
	})
	.then(null, function(err){
			res.render('error',{message: "Error" , error:err})
	});
});



router.post('/', function (req, res, next) {
	//res.json(req.body);
	User.findOrCreate({
		email: req.body.email,
		name: req.body.name
	}).then(function(user){
		var userid = user._id;
		var page = new Page({
			title: req.body.pagetitle,
			content: req.body.pagecontent,
			tags: req.body.tags.split(' '),
			author: userid,
			status: req.body.openstatus
		})
		page.save()
		.then(function(page){
		// res.redirect('/'+page.urlTitle);
		res.redirect(page.route);
	})
	.then(null, function(err){
		res.render('error',{message: "Error" , error:err})
	})
	})
});


router.get('/add', function (req, res, next) {
//	console.log('wikiadd');
//	res.send('wikiadd');
    res.render( 'addpage');
});


router.get('/:urlTitle', function (req, res, next) {
//	console.log('wikiadd');
Page.findOne({urlTitle:req.params.urlTitle}).exec()
.then(function(foundPage){
	console.log(foundPage);
	res.render('wikipage',{page:foundPage});
})
.then(null, function(err){
		res.render('error',{message: "Error" , error:err})
});

});
module.exports = router;