const express = require('express');

const {
  handleUserSignUp,
  handleUserLogin,
  handleLogout,
} = require('../controllers/userController');

const router = express.Router();

router.post('/signup', handleUserSignUp);
router.post('/login', handleUserLogin);
router.post('/logout', handleLogout);

module.exports = router;
