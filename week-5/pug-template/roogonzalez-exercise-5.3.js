/*
===============================================================================
; Title:  roogonzalez-exercise-5.3.js
; Author: Professor Krasso
; Date:   11 September 2021
; Modified by: Gustavo Roo Gonzalez
; Description: PUG Templates
; 
;===============================================================================
*/

//Require statements for express, http, pug and path.
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

// Assigning express object to app variable
var app = express();

//Directing path to views folder
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

//Creating a get request / return a response to display message
app.get("/", function (request, response) {
  response.render("index", {
    message: "Welcome to my Pug based homepage! To infinity, and beyond!",
  });
});

//Creates server to listen on port 3004.
http.createServer(app).listen(3004, function () {
  console.log("Application started on port 3004");
});
