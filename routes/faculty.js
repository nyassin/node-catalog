exports.list = function(req, res){
  res.send("List all faculty here");

  res.render('index', { title: 'Express' });
};
exports.add = function(req, res){
  res.send("add faculty here");
};