const express = require('express');
const path = require('path'); 
const bodyParser = require('body-parser');
var https = require('https');
var fs = require('fs');

// Config
var privateKey  = fs.readFileSync('sslCerts/server.key', 'utf8');
var certificate = fs.readFileSync('sslCerts/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
const app = express();
const port = 8000;

var appController = require('../controllers/appController.js');
var userController = require('../controllers/userController.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join('/../../frontEnd/applicationtracker/', 'build')));


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/getAllUsers', userController.list_all_users);




//grab all applications by category
app.get('/getPotential/:user_id', appController.list_all_potentials);
app.get('/getInProgress/:user_id',appController.list_all_inProgress);
app.get('/getCompleted/:user_id', appController.list_all_completed);
app.get('/getInterviewing/:user_id', appController.list_all_interviewing);
app.get('/getDenied/:user_id', appController.list_all_denied);
app.get('/getOffered/:user_id', appController.list_all_offered);


//update application category
app.post('/moveToInProgress/:app_id', appController.move_to_inProgress);
app.post('/moveToCompleted/:app_id', appController.move_to_completed);
app.post('/moveToInterviewing/:app_id', appController.move_to_interviewing);
app.post('/moveToDenied/:app_id', appController.move_to_denied);
app.post('/moveToOffered/:app_id', appController.move_to_offered);

app.post('/deleteApplication/:app_id', appController.delete_application);


app.post('/createApplication', appController.create_an_application);


//Serving React
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => console.log(`running on port ${port}!`))