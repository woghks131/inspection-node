const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const {renderProfile, renderMain } = require('../controllers/page');

const router = express.Router();

router.use((req, res, next) => {

    //모든 템플렛엔진에서 공통으로 사용하기 위해 locals 사용
    res.locals.user = req.user;
    
    next();
});

router.get('/profile', isLoggedIn, renderProfile);

router.get('/', renderMain);

module.exports = router;