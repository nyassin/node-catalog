
/*
 * GET users listing.
 */

var Bookshelf = require('bookshelf').mysql;

exports.list = function(req, res){
  console.log(Bookshelf)
  
  res.render('courses', { title: 'List all courses' });

};

exports.add = function(req, res){
  res.send("Add a course here");
};