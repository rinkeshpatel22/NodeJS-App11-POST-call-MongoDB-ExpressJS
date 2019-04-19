// importing mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema(
    {
        empId: {
            type: String,
            unique: true
        },
        employeeCode: {
            type: String,
            index: true, 
            unique: true, 
            required: true 
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            index: true, 
            unique: true, 
            required: true
        },
        mobile: {
            type: Number,
            index: true, 
            unique: true, 
            required: true
        }
    }
)

mongoose.model('Employee', employeeSchema);
