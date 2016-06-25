/**
 * Created by amarshanand on 25/06/2016.
 */

var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;

var User = new mongoose.Schema({
    name: String
});

module.exports = {

    // return a list of users that start with the given prefix (case insensitive)
    findUser: function(prefix, done) {
        var userModel = mongoose.model('users', User);
        userModel.find({name: { $regex : "^"+prefix, $options: '-i' }}, function (err, user_list) {
            return done(err || !user_list ? null : user_list);
        });
    }

}
