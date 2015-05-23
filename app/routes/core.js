'use strict'


var fs = require("fs");

module.exports = function(app) {

	app.get('/', function(req, res){

		console.log(req.user);

		res.render('index');
	});

	app.get("/states/*", function(req, res, next){
		console.log(req.params);
		if(req.params && req.params[0]){
			var fileName = req.params[0].replace(".html","");

			console.log(__dirname+"/../views/states/"+fileName+".jade");

			// if jade file exists
			if(fs.existsSync(__dirname+"/../views/states/"+fileName+".jade")){

				console.log("states/"+fileName);
				res.render("states/"+fileName);
			// if post is in posts
			} else {
				next();
			}

		} else {
			next();
		}
	})

	app.put('/lang/:lang', function(req, res){

		console.log(req.session.lang+ " => " +req.params.lang);

		req.session.lang = req.params.lang;

		res.jsonp(true);

	})

	
}