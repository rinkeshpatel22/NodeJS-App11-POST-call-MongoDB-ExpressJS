// import modules
const express = require('express')
const mongoose = require('mongoose');
const shortid = require('shortid');
const emp = require('./../models/Employee');

// import Employee model
const EmployeeModel = mongoose.model('Employee');

// create employee method
let createEmployee= (req, res) => {
    let empId = shortid.generate()

    // create new employee model
    let newEmployee= new EmployeeModel({
        empId: empId,
        employeeCode: req.body.employeeCode,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile
    });

    // save newly created employee model into database
    newEmployee.save((err, result) => {
        if (err) {
            res.send({'status': 'employee create failed', 'error message': err});
        } else {
            res.send(result);
        }
    })
}

// export controller
module.exports = {
    createEmployee: createEmployee,
}