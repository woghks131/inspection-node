const bcrypt = require('bcrypt');
const passport = require('../passport');
const User = require('../models/inspection_users');

exports.login = (req, res, next) => {
    console.log("login api");
    console.log("login body: ", res.body);
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            return res.redirect(`/?error=${info.message}`);
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next); //미들웨어 내의 미들웨어는 (req, res, next) 붙이기
};

exports.logout = (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
};