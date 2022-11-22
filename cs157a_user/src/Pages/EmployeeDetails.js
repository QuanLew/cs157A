import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { FaSearchengin, FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const EmployeeDetails = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "", //working for which department
  });

  // const refreshPage = () => {
  //   window.location.reload();
  // };

  //  Object Destructuring
  const { fname, lname, email, password, role } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // On Page load display all records
  const fetchDatas = async () => {
    try {
      const res = await Axios.get(
        "http://localhost:3001/api/v1/employee/display"
      );
      if (res.status === 200) {
        setData(res.data);
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  // Insert Employee Records
  const submitEmployeeRecord = async (e) => {
    // prevent refresh
    e.preventDefault();
    try {
      e.target.reset();
      const res = await Axios.post(
        "http://localhost:3001/api/v1/employee/create",
        user
      );
      if (res.status === 200) {
        setData(res.data);
        console.log(res.data);
        alert("Data Inserted");
        setUser({
          fname: "",
          lname: "",
          email: "",
          password: "",
          role: "",
        });
      }
      fetchDatas();
    } catch (err) {
      console.log(err);
    }
  };

  // Search Records here
  const searchRecords = async () => {
    alert(search);
    try {
      const res = await Axios.get(
        `http://localhost:3001/api/v1/employee/searchRecord/${search}`
      );
      if (res.status === 200) {
        if (search !== "") {
          setData(res.data);
        } else {
          fetchDatas();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Employee Record
  const deleteRecord = async (index) => {
    const id = data[index].employeeID;
    try {
      const res = await Axios.delete(
        `http://localhost:3001/api/v1/employee/${id}`
      );
      console.log("go in side: " + id);
      if (res.status === 200) {
        fetchDatas();
      } else {
        alert("Error in the Code");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <div class="container">
        <h4 className="mb-3 text-center mt-4">Information of Employees</h4>
        <div class="row mt-3">
          <div class="col-sm-4">
            <div
              className="box p-3 mb-3 mt-5"
              style={{ border: "1px solid #d0d0d0" }}
            >
              {/* Insert data*/}
              <form onSubmit={submitEmployeeRecord}>
                <h5 className="mb-3 ">Insert Employee Records</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-4"
                    name="fname"
                    value={fname}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter First name"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-4"
                    name="lname"
                    value={lname}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Last name"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-4"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Email"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-4"
                    name="password"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Password"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-2"
                    name="role"
                    value={role}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Department"
                    required="required"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block mt-4">
                  Insert Record
                </button>
              </form>
            </div>
          </div>
          <div class="col-sm-8">
            <h5 class="text-center  ml-4 mt-4  mb-5">View Records</h5>
            <div class="input-group mb-4 mt-3">
              <div class="form-outline">
                <input
                  type="text"
                  id="form1"
                  onChange={(e) => setSearch(e.target.value)}
                  class="form-control"
                  placeholder="Search Employee Here"
                  style={{ backgroundColor: "#ececec" }}
                />
              </div>
              {/* button search */}
              <button
                type="button"
                onClick={searchRecords}
                class="btn btn-success"
              >
                <FaSearchengin style={{ color: "#ececec" }} />
              </button>
            </div>
            <table class="table table-hover table-striped table-bordered ml-4">
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>Lastname</th>
                  <th>Email</th>

                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr>
                    <td>{item.employeeFName}</td>
                    <td>{item.employeeLName}</td>
                    <td>{item.employeeEmail}</td>

                    <td>{item.employeeRole}</td>
                    <td>
                      {/* button delete*/}
                      <span
                        style={{ cursor: "pointer" }}
                        className="mr-2"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to delete " + item.employeeFName
                          );
                          if (confirmBox === true) {
                            deleteRecord(index);
                          }
                        }}
                      >
                        <i
                          class="text-danger"
                          style={{ fontSize: "18px", marginRight: "10px" }}
                        >
                          <RiDeleteBin6Line />
                        </i>
                      </span>
                      {/* button edit*/}
                      <NavLink
                        className="mr-2"
                        to={`/employee/editID/${data[index].employeeID}`}
                      >
                        <i
                          class="text-warning"
                          aria-hidden="true"
                          style={{ fontSize: "20px" }}
                        >
                          <FaEdit />
                        </i>
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeDetails;
