var router = require('express').Router();

//var tweetBank = require('../models');

router.get('/wiki', function (req, res, next) {
	console.log('wiki');
	res.send('wiki');
	// res.render( 'index', { title: "George Holevas", tweets: tweets } );
});

router.post('/wiki', function (req, res, next) {
	console.log('wikipost');
	res.send('wikipost');
	// res.render( 'index', { title: "George Holevas", tweets: tweets } );
});

router.get('/wiki/add', function (req, res, next) {
	console.log('wikiadd');
	res.send('wikiadd');
	// res.render( 'index', { title: "George Holevas", tweets: tweets } );
});

module.exports = router;