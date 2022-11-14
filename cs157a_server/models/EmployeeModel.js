const pool = require("../config/db");

class Employee {
  constructor(employee) {
    this.fname = employee.fname;
    this.lname = employee.lname;
    this.email = employee.email;
    this.password = employee.password;
    this.role = employee.role;
  }
}

// get all employees
Employee.getAllEmployees = (result) => {
  pool.query("SELECT * FROM Employees", (err, res) => {
    if (err) {
      console.log("Error while fetching employess", err);
      result(null, err);
    } else {
      console.log("Employees fetched successfully");
      result(null, res);
    }
  });
};

// create new employee
Employee.createEmployee = async (employeeReqData, result) => {
  const fname = employeeReqData.fname;
  const lname = employeeReqData.lname;
  const email = employeeReqData.email;
  const password = employeeReqData.password;
  const role = employeeReqData.role;

  // console.log("datatata: " + employeeReqData.fname);
  const qry = `INSERT INTO Employees (employeeFName,employeeLName,employeeEmail,employeePassword,employeeRole) VALUES (?,?,?,?,?)`;
  const values = [fname, lname, email, password, role];
  pool.query(qry, values, (err, res) => {
    if (err) {
      //console.log("Error while inserting data");
      console.log(err);
      result(null, err);
    } else {
      console.log("Employee created successfully");
      result(null, res);
    }
  });
};

module.exports = Employee;
