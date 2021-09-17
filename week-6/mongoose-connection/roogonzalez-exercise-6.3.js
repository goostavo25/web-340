/**
    Title: roogonzalez-exercise-6.3.js
    Author: Professor Krasso
    Date: 09/16/2021
    Modified By: Gustavo Roo Gonzalez
    Description: Mongoose Connection Exercise
 */

// Require Statements for Express, HTTP, Morgan and Mongoose
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

// Variable for connection to Mongo DataBase
var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1.umga8.mongodb.net/test";

//Connection to Mongo DataBase
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

//Mongoose DataBase Variable to hold connection
var db = mongoose.connection;

//Message displayed in the console in case of an error
db.on("error", console.error.bind(console, "MongoDB connected error:"));

//Message displayed in the console if connected to MongoDB successfully
db.once("open", function () {
  console.log("Application connected to MongoDB");
});

//Create Express server
var app = express();
app.use(logger("dev"));

//Creates HTTP server that listens on port 3005
http.createServer(app).listen(3005, function () {
  console.log("application started on port 3005");
});
