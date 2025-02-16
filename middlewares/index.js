exports.isLoggedIn = (req, res, next) => {

    console.log("middlewares isLoggedIn > ", req.isAuthenticated);

    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).send('로그인이 필요합니다.');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        const message = encodeURIComponent('이미 로그인한 상태 입니다.');
        res.redirect(`/?error=${message}`);
    }
};
