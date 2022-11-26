//console.log("model_OUTSIDE");
const pool = require("../config/db");

class Department {
  constructor(department) {
    this.name = department.id;
    this.no = department.name;
    this.email = department.address;
    this.password = department.city;
  }
}

// get all departments
Department.getAllDepartments = (result) => {
  pool.query("SELECT * FROM Departments", (err, res) => {
    if (err) {
      console.log("Error while fetching departments", err);
      result(null, err);
    } else {
      console.log("Departments fetched successfully");
      result(null, res);
    }
  });
};

module.exports = Department;
