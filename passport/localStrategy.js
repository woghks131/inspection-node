const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/inspection_users');

module.exports = () => {

    console.log("passport.js 실행됨");

    passport.use(new LocalStrategy({
        usernameField: 'userId',
        passwordField: 'password',
        passReqToCallback: false,
    }, async (userId, password, done) => {
        try {
            
            console.log("LocalStrategy 실행됨: ", userId);

            const exUser = await User.findOne({ where: { user_id: userId } });
            if (exUser) {
                //const result = await bcrypt.compare(password, exUser.password);
                // if (result) {
                //     done(null, exUser);
                // } else {
                //     done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
                // }

                if (password !== exUser.password) {
                    done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
                } else{
                    done(null, exUser);
                }


            } else {
                done(null, false, { message: '가입되지 않은 회원입니다.' });
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }));

};