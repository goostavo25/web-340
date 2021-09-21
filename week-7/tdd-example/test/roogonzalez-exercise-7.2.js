/*
============================================
; Title:  roogonzalez-exercise-7.2.js
; Author: Gustavo Roo Gonzalez
; Date: 20 September 2021
; Description: Test example
;===========================================
*/

//Declaring Assert Variable
var assert = require("assert");
describe("String#split", function () {
  it("should return an array of fruits", function () {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});
