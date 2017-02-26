// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  created: {type: Date, default: Date.now},
  userId: String
});

// Export the Mongoose model
module.exports = mongoose.model('Project', ProjectSchema);
