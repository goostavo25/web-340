/*
=======================================================
;  Title: Exercise 3.2 Morgan Logging
;  Author: Professor Krasso
;  Date: 26 August 2021
;  Modified by: Gustavo Roo Gonzalez
;  Description: JS COde for Exercise 3.2 Morgan Logging
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
app.get('/', function(req, res) {
    res.render('index', {
        message: 'To infinity… and beyond!'
    });
});

//Creates server to listen on port 2525.
http.createServer(app).listen(2525, function() {
    console.log('Application started and listening on port %s', 2525);
});