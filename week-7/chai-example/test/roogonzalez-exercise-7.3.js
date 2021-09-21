/*
============================================
; Title: Assignment 7.3
; Author: Professor Krasso
; Date: 20 September 2021
; Modified By: Gustavo Roo Gonzalez
; Description: Chai Example
;===========================================
*/

// Declaring fruits variable
var fruits = require("../roogonzalez-fruits");

// Declaring chai variable
var chai = require("chai");

// Declaring assert variable
var assert = chai.assert;

//Describing Specifications
describe("fruits", function () {
  //Title of specification
  it("should return an array of fruits", function () {
    var f = fruits("Apple,Orange,Mango");

    assert(Array.isArray(f));
  });
});
