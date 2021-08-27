/*
=======================================================
;  Title: Exercise 3.3 Advanced Routing
;  Author: Professor Krasso
;  Date: 26 August 2021
;  Modified by: Gustavo Roo Gonzalez
;  Description: JS Code for Exercise 3.3 Advanced Routing
=======================================================
*/

//Require statements for express, http, path and morgan.
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

//Telling express to look in the views folder for files. 
app.set('views', path.resolve(__dirname, 'views'));

//Telling express to use the ejs view engine
app.set('view engine', 'ejs');

//Adding the logger app
app.use(logger('dev'));

//Creating a get request / return a response
app.get('/:employeeId', function(req, res) {
    var employeeId = parseInt(req.params.employeeId, 10);

    res.render('index', {
        employeeId: employeeId
    });
});

//Creates server to listen on port 3001.
http.createServer(app).listen(3001, function() {
    console.log('Application started and listening on port %s', 3001);
});