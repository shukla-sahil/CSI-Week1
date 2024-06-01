import React from 'react';
import './style.css';

const Submission = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  console.log(formData)
  if (!formData) {
    return <div>No data available</div>;
  }

  return (
    <div className="container summary">
      <h1>Form Summary</h1>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Username:</strong> {formData.username}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone Number:</strong> {formData.phoneNo}</p>
      <p><strong>Country:</strong> {formData.country}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>PAN Number:</strong> {formData.panNo}</p>
      <p><strong>Aadhar Number:</strong> {formData.aadharNo}</p>
    </div>
  );
};

export default Submission;
