var mongoose = require('mongoose');

var tourSchema = new mongoose.Schema({

	title: String,
	pic_url: String,
	description: String,
	price: Number,
	operator_pic_url: String,
	type: String,
	location: String
});

module.exports = mongoose.model('Tour', tourSchema);

