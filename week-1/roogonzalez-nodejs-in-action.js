/*
Title: Exercise 1.5
Author: Gustavo Roo Gonzalez
Date: 15 August 2021
Description: Assignment 1.5 Hello World
*/

// Including the HTTP module
var http = require("http");

// Function that responds to request from client
function processRequest(req, res) {
    var body = "This is Gustavo's web server, to infinity ...and beyond!";
    var contentLength = body.length;
    res.writeHead(200, { //write a response to the client
        "Content-Length": contentLength,
        "Content-Type": "text/plain",
    });
    res.end(body); //end of the response
}

// Opens webserver object that listens on port 8080
var s = http.createServer(processRequest);
s.listen(8080);