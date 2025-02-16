const express = require('express');
const passport = require('passport');

const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { login, logout } = require('../controllers/auth');

const router = express.Router();

// 로그인
router.post('/login', isNotLoggedIn, login);
// 로그아웃
router.get('/logout', isLoggedIn, logout);

module.exports = router;