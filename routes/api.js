var express = require('express');
var userController = require('../controllers/user');
var authController = require('../controllers/auth');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('This is the api router');
});

// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

module.exports = router;
