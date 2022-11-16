//console.log("router_OUTSIDE");
const employeeController = require("../controllers/EmployeeController");
const express = require("express");
const router = express.Router();

// ---------------EMPLOYEE------------------- //
// get all employees
router.get("/display", employeeController.getEmployeeList);

//console.log("router_INSIDE");

// create new employee
router.post("/create", employeeController.createNewEmployee);

// get employee by ID
router.get("/:id", employeeController.getEmployeeByID);

// get ID for Update
router.get("/searchRecord/:fname", employeeController.getEmployeeByName);

module.exports = router;
