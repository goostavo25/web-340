/*
=================================================================
;  Title: app.js
;  Author: Professor Krasso
;  Date: 18 September 2021
;  Modified by: Gustavo Roo Gonzalez
;  Description: JS Code for EMS Project
=================================================================
*/

//Require statements for express, http, path and morgan.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// Assigning express object to app variable
var app = express();

//Telling express to look in the views folder for files.
app.set("views", path.resolve(__dirname, "views"));

//Telling express to use the ejs view engine
app.set("view engine", "ejs");

//Adding the logger app
app.use(logger("dev"));

//Get request for the index page
app.get("/", function (request, response) {
  response.render("index", {
    title: "Home Page",
  });
});

//Get request for the list page
app.get("/list", function (request, response) {
  response.render("list", {
    title: "Lists Page",
  });
});

//Get request for the new employee page
app.get("/new", function (request, response) {
  response.render("new", {
    title: "New Employee Page",
  });
});

//Creates server to listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
