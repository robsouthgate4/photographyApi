var express = require('express');
var userController = require('../controllers/user');
var projectController = require('../controllers/project');
var authController = require('../controllers/auth');
var app = require('../app');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var router = express.Router();
var multer = module.exports = require('multer');

const storage = module.exports = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = module.exports = multer({ storage });

router.route('/authenticate')
  .post(userController.authenticateUser);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to the photography site api!!');
});

// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(userController.getUsers);

router.route('/projects')
  .post(upload.single('file'), projectController.postProjects)
  .get(projectController.getProjects)


  router.route('/projects/:id')
    .get(projectController.getActiveProject)
    .delete(projectController.removeProject);


module.exports = router;
