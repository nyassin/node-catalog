
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var courses = require('./routes/courses');
var faculty = require('./routes/faculty');
var field = require('./routes/field');
var http = require('http');
var path = require('path');

//Added dependencies

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// Connect to Database
var Bookshelf  = require('bookshelf');

Bookshelf.MySql = Bookshelf.initialize({
  client: 'mysql',
  connection: {
    // your connection config
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'catalog',
    charset  : 'utf8'
  }
});

// elsewhere, to use the client:
// var Bookshelf = require('bookshelf').MySql;


// var Faculty = Bookshelf.Model.extend({

//   tableName: 'faculties'

// });
// var Fields = Bookshelf.Model.extend({tableName: 'fields'});
// var Courses = Bookshelf.Model.extend({

//   tableName: 'courses',
//   field: function() {
//     return this.belongsTo(Fields);
//   },
//   faculty: function() {
//     return this.belongsTo(Faculty);
//   }
// });

//Attempting to better understand how SQL Queries work
// new Courses().query('where', 'id', '=', '100')
//   .fetch()
//   .then(function(model) {
//     // outputs 'Slaughterhouse Five'

//     console.log(model.get('title'));

//   });
// Courses.collection().fetch().then(function(collection) {
//   // ...
//   collection.forEach(function(item) {
//   })
// })
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/courses', courses.list);
app.get('/courses/add', courses.add);
app.get('/faculty', faculty.list);
app.get('/faculty/add', faculty.add);
app.get('/field', field.list);
app.get('/field/add', field.add);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
