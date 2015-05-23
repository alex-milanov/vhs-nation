'use strict'


module.exports = function(app) {

	app.get('/', function(req, res){

		console.log(req.user);

		res.render('index');
	});

	app.put('/lang/:lang', function(req, res){

		console.log(req.session.lang+ " => " +req.params.lang);

		req.session.lang = req.params.lang;

		res.jsonp(true);

	})

	
}