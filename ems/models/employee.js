/*
============================================
;  Title: Assignment 7.4
;  Author: Professor Krasso
;  Date: 23 September 2021
;  Modified By: Gustavo Roo 
;===========================================
*/

// Declaring Mongoose/Schema variables
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Defining the employeeSchema variable
var employeeSchema = new Schema({
  firstName: { type: String, required: true, unique: true },
  lastName: { type: String, required: true, unique: true },
});

// Declaring the employee model
var Employee = mongoose.model("Employee", employeeSchema);

// Exporting Employee module to calling files
module.exports = Employee;
