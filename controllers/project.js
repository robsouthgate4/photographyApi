// Load required packages
var Project = require('../models/project');
var app = require('../app');

// Create endpoint /api/users for POST
exports.postProjects = function(req, res) {

  //TODO: add post functionality

  // var user = new User({
  //   username: req.body.username,
  //   password: req.body.password
  // });
  //
  // user.save(function(err) {
  //   if (err) res.send(err);
  //
  //   res.json({ message: 'A new photographer has been added to the site!' });
  // });
};

exports.getProjects = function(req, res) {
  Project.find(function(err, projects) {
    if (err)
      res.send(err);
      res.json(projects);
  });
};
