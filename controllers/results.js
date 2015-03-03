/**
* GET page for results
*/

exports.getResults = function(req, res){
	res.render('results', {
    title: 'Search Results'
  });
}