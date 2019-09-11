var sql = require('./db.js');

var Application = function (application) {
    if(application.app_id){
        this.app_id = application.app_id;
    }
    this.user_id = application.user_id;
    this.company = application.company;
    this.position = application.position;
    this.description = application.description;
    this.salary = application.salary;
    this.link = application.link;
    this.current_tab = application.current_tab;
    this.prev_tab = application.prev_tab;
};

Application.createPotential = function (newApp, user_id, result) {
    sql.query("INSERT INTO applications set ?", newApp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res.insertId);
        }
    });
};

Application.getAllPotentials = function (user_id, result) {
    sql.query("Select * from applications where user_id = ? AND current_tab = 0", user_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Application.getAllInProgress = function (user_id, result) {
    sql.query("Select * from applications where user_id = ? AND current_tab = 1", user_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Application.getAllCompleted = function (user_id, result) {
    sql.query("Select * from applications where user_id = ? AND current_tab = 2", user_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Application.getAllInterviewing = function (user_id, result) {
    sql.query("Select * from applications where user_id = ? AND current_tab = 3", user_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Application.getAllDenied = function (user_id, result) {
    sql.query("Select * from applications where user_id = ? AND current_tab = 4", user_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Application.getAllOffered = function (user_id, result) {
    sql.query("Select * from applications where user_id = ? AND current_tab = 5", user_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};


//Move to different grouping

Application.moveToInProgress = function (app_id, result) {
    sql.query("UPDATE applications SET prev_tab = current_tab, current_tab = 1 WHERE app_id = ?", app_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Application.moveToCompleted = function (app_id, result) {
    sql.query("UPDATE applications SET prev_tab = current_tab, current_tab = 2 WHERE app_id = ?", app_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Application.moveToInterviewing = function (app_id, result) {
    sql.query("UPDATE applications SET prev_tab = current_tab, current_tab = 3 WHERE app_id = ?", app_id, function (err, req, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Application.moveToDenied = function (app_id, result) {
    sql.query("UPDATE applications SET prev_tab = current_tab, current_tab = 4 WHERE app_id = ?", app_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Application.moveToOffered = function (app_id, result) {
    sql.query("UPDATE applications SET prev_tab = current_tab, current_tab = 5 WHERE app_id = ?", app_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Application.moveToOffered = function (app_id, result) {
    sql.query("UPDATE applications SET prev_tab = current_tab, current_tab = 5 WHERE app_id = ?", app_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Application.moveToOffered = function (app_id, result) {
    sql.query("UPDATE applications SET prev_tab = current_tab, current_tab = 5 WHERE app_id = ?", app_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Application;