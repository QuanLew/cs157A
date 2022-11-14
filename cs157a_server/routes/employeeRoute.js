const employeeController = require("../controllers/EmployeeController");
const express = require("express");
const router = express.Router();

// ---------------EMPLOYEE------------------- //
// get all employees
router.get("/display", employeeController.getEmployeeList);

// create new employee
router.post("/create", employeeController.createNewEmployee);

module.exports = router;
