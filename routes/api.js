var express = require('express');
var userController = require('../controllers/user');
var projectController = require('../controllers/project');
var authController = require('../controllers/auth');
var app = require('../app');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var router = express.Router();

router.route('/authenticate')
  .post(userController.authenticateUser);

// router.use(function(req, res, next) {
//
//   // check header or url parameters or post parameters for token
//   var token = req.body.token || req.query.token || req.headers['x-access-token'];
//
//   // decode token
//   if (token) {
//
//     // verifies secret and checks exp
//     jwt.verify(token, app.get('superSecret'), function(err, decoded) {
//       if (err) {
//         return res.json({ success: false, message: 'Failed to authenticate token.' });
//       } else {
//         // if everything is good, save to request for use in other routes
//         req.decoded = decoded;
//         next();
//       }
//     });
//
//   } else {
//
//     // if there is no token
//     // return an error
//     return res.status(403).send({
//         success: false,
//         message: 'No token provided.'
//     });
//
//   }
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to the photography site api!!');
});

// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(userController.getUsers);

router.route('/projects')
  .post(projectController.postProjects)
  .get(projectController.getProjects);


module.exports = router;
