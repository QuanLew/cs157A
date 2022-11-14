// import Employee from "../models/EmployeeModel.js";

const EmployeeModel = require("../models/EmployeeModel");

//get all employee list
exports.getEmployeeList = (req, res) => {
  EmployeeModel.getAllEmployees((err, employees) => {
    if (err) throw err;
    res.send(employees);
  });
};

// create new employee
exports.createNewEmployee = (req, res) => {
  const employeeReqData = new EmployeeModel(req.body);
  console.log("employeeReqData", employeeReqData);

  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    console.log("i if!!!");
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
      console.log("i elese!!!");
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Employee Created Successfully",
        data: employee.insertId,
      });
    });
  }
};
