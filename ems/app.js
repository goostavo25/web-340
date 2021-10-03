/*
=================================================================
;  Title: app.js
;  Author: Professor Krasso
;  Date: 18 September 2021
;  Modified by: Gustavo Roo Gonzalez
;  Description: JS Code for EMS Project
=================================================================
*/

//Require statements for express, http, path, helmet, and morgan.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
var Employee = require("./models/employee");

//MongoDB Connection Module
var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1.umga8.mongodb.net/test";
mongoose.connect(mongoDB, {});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function () {
  console.log("Application connected to MongoDB instance");
});

// Setup csurf protection
var csrfProtection = csrf({ cookie: true });

// Initialize express
var app = express();

//Telling express to look in the views folder for files.
app.set("views", path.resolve(__dirname, "views"));

//Telling express to use the ejs view engine
app.set("view engine", "ejs");

//Use Statements
app.use(logger("dev"));
app.use(helmet.xssFilter());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) {
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

//Get function
app.get("/", function (request, response) {
  response.render("index", {
    message: "XSS Prevention Example",
    title: "Home page",
  });
});

//Get request for the new employee page
app.get("/new", function (request, response) {
  response.render("new", {
    title: "New",
    message: "Enter your first and last name",
  });
});

//Process request
app.post("/process", function (request, response) {
  console.log(request.body);
  if (!request.body.firstName) {
    response.status(404).send("Entries must have a name.");
    return;
  }

  if (!request.body.lastName) {
    response.status(404).send("You must have a last name.");
    return;
  }

  //Get request form data
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;

  //Create Employee Model
  var employee = new Employee({
    firstName: firstName,
    lastName: lastName,
  });

  //Save
  employee.save(function (error) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log(firstName + lastName + "Your entry was successfully saved!");
      res.redirect("/");
    }
  });
});

//Get request for the list page
app.get("/list", function (request, response) {
  Employee.find({}, function (error, employees) {
    if (error) throw error;
    res.render("list", {
      title: "Employee List",
      employees: employees,
    });
  });
});

//Creates server to listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
