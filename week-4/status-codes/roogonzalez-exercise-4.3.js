/*
====================================================
; Title:  roogonzalez-exercise-4.3.js
; Author: Professor Krasso
; Date:   03 September 2021
; Modified by: Gustavo Roo Gonzalez
; Description: Exercise to set codes in Node.js
;===================================================
*/

//Require statements for express, http and morgan.
var express = require("express");
var http = require("http");
var logger = require("morgan");

// Assigning express object to app variable
var app = express();

//Adding the logger app
app.use(logger("dev"));

//List of requests using status codes
app.get("/ok", function (request, response) {
  response.status(200);
  response.json({
    message: "Page loaded correctly",
  });
});

app.get("/unauthorized", function (request, response) {
  response.status(401);
  response.json({
    message: "Access unauthorized",
  });
});

app.get("/forbidden", function (request, response) {
  response.status(403);
  response.json({
    message: "Access forbidden",
  });
});

app.get("/not-found", function (request, response) {
  response.status(404);
  response.json({
    error: "Resource was not found",
  });
});

app.get("/not-allowed", function (request, response) {
  response.status(405);
  response.json({
    message: "Method not allowed",
  });
});

app.get("/server-error", function (request, response) {
  response.status(500);
  response.json({
    message: "Internal Server Error",
  });
});

app.get("/not-implemented", function (request, response) {
  response.status(501);
  response.json({
    error: "Page not implemented.",
  });
});

app.get("/unavailable", function (request, response) {
  response.status(503);
  response.json({
    message: "Service Unavailable",
  });
});

//Creates server to listen on port 2000.
http.createServer(app).listen(2000, function () {
  console.log("Application started on port 2000!");
});
