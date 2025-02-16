
exports.renderProfile = (req, res) => {
    res.render('profile');
};

exports.renderMain = (req, res, next) => {
    const mainlist = [];
    res.render('main', {
        title: 'inspection',
        mainlist,
    });
};
