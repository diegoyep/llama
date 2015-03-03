/**
* GET page for results
*/

exports.getResults = function(req, res){
	res.render('results', {
    title: 'Search Results',
    results: req.session.results
  });
}