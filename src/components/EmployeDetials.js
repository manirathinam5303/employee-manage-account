import React, { useState } from "react";
import { EditableText } from "@blueprintjs/core";
import "./employeDetails.css";
import 'normalize.css';

const EmployeDetails = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("Employeedata")) || []);

  const handleChange = (value, field, index) => {
    const updatedData = [...data];
    updatedData[index][field] = value;
    setData(updatedData);
    localStorage.setItem("Employeedata", JSON.stringify(updatedData));
  };

  const handleDelete = (index) => {
    // Remove the item at the specified index
    const updatedData = data.filter((_, i) => i !== index);

    // Update state and localStorage
    setData(updatedData);
    localStorage.setItem("Employeedata", JSON.stringify(updatedData));
  };

  return (
    <div>
      <nav className="navbar"  id="head">
        <div className="container-fluid">
          <p id="logo">Employee</p>

          <form className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
      <div className="container-fluid table_container table-container">
        <div className="row">
          <div className="col-sm-12">
            <table border={1} className="styled-table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Employee Name</th>
                  <th>Department</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.length>0 && data?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <EditableText
                        value={item.Id}
                        onChange={(value) => handleChange(value, "Id", index)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={item.Name}
                        onChange={(value) => handleChange(value, "Name", index)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={item.Department}
                        onChange={(value) => handleChange(value, "Department", index)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={item.position}
                        onChange={(value) => handleChange(value, "position", index)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={item.status}
                        onChange={(value) => handleChange(value, "status", index)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={item.username}
                        onChange={(value) => handleChange(value, "username", index)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={item.password}
                        onChange={(value) => handleChange(value, "password", index)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={item.email}
                        onChange={(value) => handleChange(value, "email", index)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={item.address}
                        onChange={(value) => handleChange(value, "address", index)}
                      />
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeDetails;
