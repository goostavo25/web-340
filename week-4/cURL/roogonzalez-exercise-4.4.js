/*
===============================================================================
; Title:  roogonzalez-exercise-4.4.js
; Author: Professor Krasso
; Date:   04 September 2021
; Modified by: Gustavo Roo Gonzalez
; Description: Demonstrates CRUD operations in a Node.js API.
; Reference: CRUD Example from BUWEBDEV Repository
;            https://github.com/buwebdev/web-340/blob/master/week-4/crud/app.js
;===============================================================================
*/

//Require statements for express and http
const express = require("express");
const http = require("http");

// Assigning express object to app variable
let app = express();

//Parameter to set port 3000
app.set("port", process.env.PORT || 3000);

//List of different HTTP verbs
app.get("/", function (req, res) {
  res.send("API invoked as an HTTP GET request.");
});

app.put("/", function (req, res) {
  res.send("API invoked as an HTTP PUT request.");
});

app.post("/", function (req, res) {
  res.send("API invoked as an HTTP POST request");
});

app.delete("/", function (req, res) {
  res.send("API invoked as an HTTP DELETE request");
});

//Creates server to listen on port 3000.
http.createServer(app).listen(app.get("port"), function () {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
