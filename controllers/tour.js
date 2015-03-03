var Tour = require('../models/Tour');

/**
* POST /search
*/

exports.postSearch = function(req, res, next){

	var activity = req.body.activity;
	var location = req.body.location;
	
	if (activity == "all") {activity = ""};
	if (location == "all") {location = ""};


	Tour.find({type: activity, location: location}, function(err, docs){
		if(err){
			console.log("Error");
			return res.redirect('/');
		}
		req.session.results = docs;
		return res.redirect('/results');

	});
}