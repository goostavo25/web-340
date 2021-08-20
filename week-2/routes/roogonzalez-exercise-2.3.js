/**
;   Title: Exercise 2.3
;   Author: Professor Krasso
;   Date: 08/20/2021
;   Modified By: Gustavo Roo Gonzalez
;   Description: Exercise using Express Routing.
*/

// Variables to require Express and HTTP modules.
var express = require("express");
var http = require("http");

// Calls the Express function to start an Express app
var app = express();

// Registers a route handler that Express will call when it receives an HTTP GET request to root page.
app.get("/", function(request, response) {
    response.end('Welcome to the homepage.\n');
});

// Registers a route handler that Express will call when it receives an HTTP GET request to /About page.
app.get("/about", function(request, response) {
    response.end('Welcome to the about page.\n');
});

// Registers a route handler that Express will call when it receives an HTTP GET request to /Contact page.
app.get("/contact", function(request, response) {
    response.end('Welcome to the contact page.\n');
});

// If no previous option selected, display 404 message.
app.use(function(request, response) {
    response.statusCode = 404;
    response.end("404");
});

// Starts the server listening on port 2000
http.createServer(app).listen(2000, function() {
    console.log('Application started on port %s', 2000); //Displays message to the console
});