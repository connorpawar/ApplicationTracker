var User = require('../model/userModel.js');

exports.list_all_users = function (req, res) {
    User.getAlluser(function (err, user) {
        console.log('controller')
        if (err) {
            res.send(err);
            console.log('res', user);
        } else{
        	res.send(user);
	    }
    });
};


exports.create_a_user = function (req, res) {
    var new_user = new User(req.body);

    if (!new_user.username || !new_user.password) {
        res.status(400).send({ error: true, message: 'Please provide correct request body for user' });
    }
    else {
        User.createUser(new_user, function (err, user) {
            if (err){
                res.send(err);
            }
            res.json(user);
        });
    }
};