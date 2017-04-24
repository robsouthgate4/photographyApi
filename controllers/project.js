// Load required packages
var Project = require('../models/project');
var app = require('../app');
var path = require('path');

exports.postProjects = function(req, res) {

  const file = req.file;
  const meta = req.body;

  var project = new Project({
    code: 'test',
    caption: meta.caption,
    likes: 0,
    display_src: 'http://' + req.headers.host + '/static/' + file.originalname, //TODO: this is wrong, update to proper url
    tags: req.body.tags.split(',')
  });

  project.save(function(err) {
    if (err) throw err;
    res.json(project);
  });
};

exports.getProjects = function(req, res) {
  Project.find(function(err, projects) {
    if (err)
      res.send(err);
      res.json(projects);
  });
};

exports.removeProject = function(req, res) {
  var projectId = req.params.id;
  Project.remove({ _id: projectId }, function(err) {
      if (!err) {
          res.send('Removed project:' + ' ' + projectId);
      }
      else {
          throw err;
      }
  });
};

exports.getActiveProject = function(req, res) {
  var routeId = req.params.id;
  Project.findOne({ _id: routeId }, function(err, project) {
    if (err)
      res.send(err);
      res.json(project);
  });
};
