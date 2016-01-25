var router = require('express').Router();

//var tweetBank = require('../models');

router.get('/', function (req, res) {
	console.log('hi');
	res.send('hi');
	// res.render( 'index', { title: "George Holevas", tweets: tweets } );
});

module.exports = router;