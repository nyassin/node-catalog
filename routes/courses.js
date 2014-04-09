
/*
 * GET users listing.
 */

 
exports.list = function(req, res){
	var Bookshelf = require('bookshelf').MySql;
	var Courses = Bookshelf.Model.extend({tableName: 'courses'});

	Courses.collection().fetch().then(function(collection) {
	    res.render('courses', { title: 'List all courses', collection: collection });
	})


};

exports.add = function(req, res){
  res.send("Add a course here");
};
