/*
=============================================================================
; Title:  roogonzalez-exercise-4.2.js
; Author: Professor Krasso
; Date:   03 September 2021
; Modified by: Gustavo Roo Gonzalez
; Description: Demonstration of returning JSON data from a Node.js server.
;============================================================================
*/

//Require statements for express and HTTP
var express = require("express");
var http = require("http");

// Assigning express object to app variable
var app = express();

//Creating a get request / return a response
app.get("/customer/:id", function (request, response) {
  var id = parseInt(request.params.id, 10);

  //Response with data from a JSON object
  response.json({
    firstName: "Gustavo",
    lastName: "Roo Gonzalez",
    employeeId: id,
  });
});

//Creates server to listen on port 2525.
http.createServer(app).listen(2525, function () {
  console.log("Application started on port 2525");
});
