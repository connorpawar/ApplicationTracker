var Application = require('../model/appModel.js');

exports.list_all_potentials = function (req, res) {
    Application.getAllPotentials(req.params.user_id, function (err, application) {
        if (err) {
            res.send(err);
            console.log('res', application);
        }
        console.log(application);
        // res.json(JSON.stringify(application));
        res.send(application);
    });
};

exports.list_all_inProgress = function (req, res) {
    Application.getAllInProgress(req.params.user_id, function (err, application) {
        if (err) {
            res.send(err);
            console.log('res', application);
        }
        res.send(application);
    });
};

exports.list_all_completed = function (req, res) {
    Application.getAllCompleted(req.params.user_id, function (err, application) {
        if (err) {
            res.send(err);
            console.log('res', application);
        }
        res.send(application);
    });
};

exports.list_all_interviewing = function (req, res) {
    Application.getAllInterviewing(req.params.user_id, function (err, application) {
        if (err) {
            res.send(err);
            console.log('res', application);
        }
        res.send(application);
    });
};

exports.list_all_denied = function (req, res) {
    Application.getAllDenied(req.params.user_id, function (err, application) {
        if (err) {
            res.send(err);
            console.log('res', application);
        }
        res.send(application);
    });
};

exports.list_all_offered = function (req, res) {
    Application.getAllOffered(req.params.user_id, function (err, application) {
        if (err) {
            res.send(err);
            console.log('res', application);
        }
        res.send(application);
    });
};


exports.move_to_inProgress = function (req, res) {
    Application.moveToInProgress(req.params.app_id, function (err, application) {
        if (err) {
            res.send(err);
            console.log('res', application);
        }
        res.send(application);
    });
};

exports.move_to_completed = function (req, res) {
    Application.moveToCompleted(req.params.app_id, function (err, application) {
        if (err) {
            res.send(err);
            console.log('res', application);
        }
        res.send(application);
    });
};

exports.move_to_interviewing = function (req, res) {
    Application.moveToInterviewing(req.params.app_id, function (err, application) {
        if (err) {
            res.send(err);
            console.log('res', application);
        }
        res.send(application);
    });
};

exports.move_to_denied = function (req, res) {
    Application.moveToDenied(req.params.app_id, function (err, application) {
        if (err) {
            res.send(err);
            console.log('res', application);
        }
        res.send(application);
    });
};

exports.move_to_offered = function (req, res) {
    Application.moveToOffered(req.params.app_id, function (err, application) {
        if (err) {
            res.send(err);
            console.log('res', application);
        }
        res.send(application);
    });
};



exports.create_an_application = function (req, res) {
    var new_app = new Application(req.body);

    console.log("req", req.body)
    console.log(new_app);

    if (!new_app.company || !new_app.position) {
        res.status(400).send({ error: true, message: 'Please provide correct request body for new application' });
    }
    else {
        Application.createPotential(new_app, req.params.user_id, function (err, user) {
            if (err){
                res.send(err);
            }
            res.json(user);
        });
    }
};