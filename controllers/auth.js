const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/inspection_users');

exports.login = (req, res, next) => {
    
    console.log("login request body:  ", req.body);

    passport.authenticate('local', (authError, user, info) => {

        if (authError) {
            console.error("authError: ",authError);
            return next(authError);
        }
        if (!user) {
            return res.status(401).json({
                success: false,
                message: info.message, // 인증 메시지 반환
            });
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }

            return res.status(200).json({
                success: true,
                message: "Login successful",
                user: {
                    id: user.userId,
                    username: user.username,
                    // 필요한 추가 데이터
                }
            });
        });
    })(req, res, next); //미들웨어 내의 미들웨어는 (req, res, next) 붙이기
};

exports.logout = (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
};