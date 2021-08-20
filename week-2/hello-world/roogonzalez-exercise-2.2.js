/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso
; Date: 20 August 2021
; Modified By: Gustavo Roo Gonzalez
; Description: Hello World app using Express
; for exercise 2.2.
;===========================================
*/

//Variable to require the Express module
var express = require("express");

//Variable to require a HTTP module
var http = require("http");

//Calls the express function to start a new Express application.
var app = express();

//Middleware or request handler that sends response
app.use(function(request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello, world!");
});

//Starts the server that listens on port 8080
http.createServer(app).listen(8080);