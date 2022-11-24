import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { FaSearchengin, FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const CustomerDetails = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  //  Object Destructuring
  const { name, address, city, state, zipcode } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // On Page load display all records
  const fetchDatas = async () => {
    try {
      const res = await Axios.get(
        "http://localhost:3001/api/v1/customer/display"
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

  // Insert Customer Records
  const submitCustomerRecord = async (e) => {
    // prevent refresh
    e.preventDefault();
    try {
      e.target.reset();
      const res = await Axios.post(
        "http://localhost:3001/api/v1/customer/create",
        user
      );
      if (res.status === 200) {
        alert("Data Inserted");
        setUser({
          name: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
        });
        console.log("success here" + res.message);
      } else {
        console.log("statusss here " + res.message);
      }
      fetchDatas();
    } catch (err) {
      console.log(err);
      alert(
        "Status " +
          err.response.status +
          " : " +
          err.response.data.errors[0].msg
      );
    }
  };

  // Search Records here
  const searchRecords = async () => {
    alert(search);
    try {
      if (search !== "") {
        const res = await Axios.get(
          `http://localhost:3001/api/v1/customer/searchRecord/${search}`
        );
        if (res.status === 200) {
          setData(res.data);
        }
      } else {
        fetchDatas();
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
              <form onSubmit={submitCustomerRecord}>
                <h5 className="mb-3 ">Insert Customer Records</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-4"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Customer Name"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-4"
                    name="address"
                    value={address}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Address"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-4"
                    name="city"
                    value={city}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter City"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-4"
                    name="state"
                    value={state}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter State"
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-2"
                    name="zipcode"
                    value={zipcode}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Zipcode"
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
                  placeholder="Search Customer Name"
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
                  <th>Customer Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zipcode</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr>
                    <td>{item.Customer_name}</td>
                    <td>{item.Address}</td>
                    <td>{item.City}</td>
                    <td>{item.State}</td>
                    <td>{item.Zip_code}</td>
                    <td>
                      {/* button delete*/}
                      <span
                        style={{ cursor: "pointer" }}
                        className="mr-2"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to delete " + item.Customer_name
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
                        to={`/customer/editID/${data[index].Customer_ID}`}
                      >
                        <i
                          class="text-warning"
                          aria-hidden="true"
                          style={{ fontSize: "20px", marginRight: "10px" }}
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

export default CustomerDetails;
