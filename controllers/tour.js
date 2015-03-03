var Tour = require('../models/Tour');

/**
* POST /search
*/

exports.postSearch = function(req, res, next){

	var activity = req.body.activity;
	var location = req.body.location;
	console.log(req.body);
	console.log(activity);
	console.log(location)
	if (activity == "all") {activity = null};
	if (location == "all") {location = null};

	if (activity && location) {

		Tour.find({type: activity, location: location}, function(err, docs){
			if(err){
				console.log("Error");
				return res.redirect('/');
			}
			console.log(docs);
			req.session.results = docs;
			return res.redirect('/results');

		});

	} else if(activity && !location) {
		Tour.find({type: activity}, function(err, docs){
			if(err){
				console.log("Error");
				return res.redirect('/');
			}
			console.log(docs);
			req.session.results = docs;
			return res.redirect('/results');

		});


	} else if(!activity && location) {
		Tour.find({location:location}, function(err, docs){
			if(err){
				console.log("Error");
				return res.redirect('/');
			}
			console.log(docs);
			req.session.results = docs;
			return res.redirect('/results');

		});

	} else {
		Tour.find({}, function(err, docs){
			if(err){
				console.log("Error");
				return res.redirect('/');
			}
			console.log(docs);
			req.session.results = docs;
			return res.redirect('/results');

		});

	}

}