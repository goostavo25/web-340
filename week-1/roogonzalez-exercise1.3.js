/*
============================================
; Title:  roogonzalez-exercise1.3.js
; Author: Gustavo Roo Gonzalez
; Date:   14 August 2021
; Description: Modules Assignment
;===========================================
*/

var url = require("url");

var parsedURL = url.parse("https://www.practicenode.com/profile?name=roogonzalez");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);