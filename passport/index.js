const passport = require("passport");
const local = require('./localStrategy');
const User = require('../models/inspection_users');

module.exports = () => {
    passport.serializeUser((user, done) => {    //로그인 할때만 실행
        console.log("passport serializeUser > ", user);
        done(null, user.user_num);  //null: 에러시 사용, 성공시 user_num 저장
    });

    passport.deserializeUser((user_num, done) => {  //각 요청마다 실행
        User.findOne({ where: { user_num }})
            .then(user => done(null, user)) //req.user에 저장
            .catch(err => done(err));
    });

    local();

}