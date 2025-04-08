const express = require('express');
const router = express.Router();
const {
  register,
  login,
  verifyToken,
  updateUser
} = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.get('/verifytoken', verifyToken);
router.put('/update', updateUser);

module.exports = router;
