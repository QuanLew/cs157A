//console.log("router_OUTSIDE");
const employeeController = require("../controllers/EmployeeController");
const customerController = require("../controllers/CustomerController");
const express = require("express");
const router = express.Router();

// ---------------EMPLOYEE------------------- //
// get all employees
router.get("/employee/display", employeeController.getEmployeeList);

// create new employee
router.post("/employee/create", employeeController.createNewEmployee);

// get ID for searching employees
router.get(
  "/employee/searchRecord/:fname",
  employeeController.getEmployeeByName
);

// get employee by ID for supporting update
router.get("/employee/:id", employeeController.getEmployeeByID);

// update employee
router.put("/employee/:id", employeeController.updateEmployee);

// delete employee
router.delete("/employee/:id", employeeController.deleteEmployee);

// ---------------MACHINE------------------- //

// ---------------CUSTOMER------------------- //
// get all customer
router.get("/customer/display", customerController.getCustomerList);

// create new customer
router.post("/customer/create", customerController.createNewCustomer);

// get ID for searching customers
router.get(
  "/customer/searchRecord/:data",
  customerController.getCustomerByName
);

// get customer by ID for supporting update
router.get("/customer/:id", customerController.getCustomerByID);

// update customer
router.put("/customer/:id", customerController.updateCustomer);

module.exports = router;
