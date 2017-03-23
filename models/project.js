// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var ProjectSchema = new mongoose.Schema({
  code: String,
  caption: String,
  likes: Number,
  id: String,
  display_src: String
});

// Export the Mongoose model
module.exports = mongoose.model('Project', ProjectSchema);
