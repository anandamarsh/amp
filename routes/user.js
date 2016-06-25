var User = require('../model/user');

module.exports = function(router) {

    router.get('/findusers', function (req, res, next) {
        User.findUser(req.query.q, function (user_list) {
            return user_list ?res.send(user_list) : res.sendStatus(500);
        })
    });

}