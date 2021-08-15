/*
Title: Exercise 1.5
Author: Gustavo Roo Gonzalez
Date: 15 August 2021
Description: Assignment 1.5 Hello World
*/

var http = require("http");

function processRequest(req, res) {
    var body = "This is Gustavo's web server, to infinity ...and beyond!";
    var contentLength = body.length;
    res.writeHead(200, {
        "Content-Length": contentLength,
        "Content-Type": "text/plain",
    });
    res.end(body);
}
var s = http.createServer(processRequest);
s.listen(8080);