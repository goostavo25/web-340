/*
=================================================================
;  Title: roogonzalez-exercise3.4.js
;  Author: Professor Krasso
;  Date: 26 August 2021
;  Modified by: Gustavo Roo Gonzalez
;  Description: JS Code for Exercise 3.4 Putting it all together
=================================================================
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

//Get request for the home page
app.get('/', function(req, res) {
    res.render('index', {
        message: "Home page"
    });
});

//Get request for the about page
app.get('/about', function(req, res) {
    res.render('about', {
        message: "About page"
    });
});

//Get request for the contact page
app.get('/contact', function(req, res) {
    res.render('contact', {
        message: "Contact page"
    });
});

//Get request for the products page
app.get('/products', function(req, res) {
    res.render('products', {
        message: "Products page"
    });
});

//Creates server to listen on port 8080.
http.createServer(app).listen(8080, function() {
    console.log("Application has started on port %s", 8080);
});