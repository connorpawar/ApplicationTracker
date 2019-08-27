var sql = require('./db.js');

//user object constructor
var User = function(user){
    this.username = user.username;
    this.password = user.password;
};

User.createuser = function (newuser, result) {    
        sql.query("INSERT INTO user set ?", newuser, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};

User.getAlluser = function (result) {
    sql.query("Select * from user", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('users : ', res);
            result(null, res);
        }
    });   
};

module.exports = User;