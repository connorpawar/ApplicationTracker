const express = require('express')
const app = express()
const port = 3000

//Default Route for server check
app.get('/', (req, res) => res.send('Server is up and running'))


/*
Add more endpoints here
*/
