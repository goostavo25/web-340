/*
===============================================================================
; Title:  roogonzalez-exercise-5.2.js
; Author: Professor Krasso
; Date:   11 September 2021
; Modified by: Gustavo Roo Gonzalez
; Description: EJS Templates
; 
;===============================================================================
*/

//Require statements for express, http and path.
const express = require("express");
const http = require("http");
const path = require("path");

// Assigning express object to app variable
var app = express();

//Directing path to views folder
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//Array of characters
var characters = ["Mickey", "Minnie", "Donald", "Pluto", "Goofy"];

//Creating a get request / return a response to display characters
app.get("/", function (req, res) {
  res.render("index", {
    disney: characters,
  });
});

//Creates server to listen on port 3003.
http.createServer(app).listen(3003, function () {
  console.log(`Application started and listening on port 3003`);
});
