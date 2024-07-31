import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Id: '',
    Name: '',
    Department: '',
    position: '',
    status: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!formData.Id) {
      validationErrors.Id = "Employee ID is required";
    }

    if (!formData.Name) {
      validationErrors.Name = 'Name is required';
    }

    if (!formData.Department) {
      validationErrors.Department = 'Department is required';
    }

    if (!formData.position) {
      validationErrors.position = 'Position is required';
    }

    if (!formData.status) {
      validationErrors.status = 'Status is required';
    }

    if (!formData.username) {
      validationErrors.username = 'Username is required';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is invalid';
    }

    if (!formData.phone) {
      validationErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = 'Phone number is invalid';
    }

    if (!formData.address) {
      validationErrors.address = 'Address is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      const existingData = JSON.parse(localStorage.getItem("Employeedata")) || [];
       console.log(existingData)
      localStorage.setItem("Employeedata", JSON.stringify([...existingData, formData]));
      alert('Registration successful');
      setFormData({
        Id: "",
        Name: '',
        Department: '',
        position: '',
        status: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        address: ''
      });
      navigate("/employetetails"); 
    }
  };

  return (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <h1 style={{fontWeight:"lighter"}}>Register Here</h1>
        <div className="mb-3">
          <input
            type="number"
            name="Id"
            placeholder="Employee ID"
            value={formData.Id}
            onChange={handleChange}
            className="form-control"
            style={{ width: "300px" }}
          />
          {errors.Id && <div className="text-danger">{errors.Id}</div>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={formData.Name}
            onChange={handleChange}
            className="form-control"
            style={{ width: "300px" }}
          />
          {errors.Name && <div className="text-danger">{errors.Name}</div>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="Department"
            placeholder="Department"
            value={formData.Department}
            onChange={handleChange}
            className="form-control"
          />
          {errors.Department && <div className="text-danger">{errors.Department}</div>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={formData.position}
            onChange={handleChange}
            className="form-control"
          />
          {errors.position && <div className="text-danger">{errors.position}</div>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
            className="form-control"
          />
          {errors.status && <div className="text-danger">{errors.status}</div>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
          />
          {errors.username && <div className="text-danger">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-control"
          />
          {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
          />
          {errors.phone && <div className="text-danger">{errors.phone}</div>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
          />
          {errors.address && <div className="text-danger">{errors.address}</div>}
        </div>
        <div className="btn_1">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
