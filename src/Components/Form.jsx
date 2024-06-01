import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Form = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
   const navigate = useNavigate(); 
 

  const validate = (data) => {
    const errors = {};
    if (!data.firstName){
      errors.firstName = 'First Name is required';
    } 
    if (!data.lastName){
      errors.lastName = 'Last Name is required';
    } 
    if (!data.username) {
      errors.username = 'Username is required';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.password) {
      errors.password = 'Password is required';
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>?]).{8,}$/.test(data.password)) {
      errors.password = 'Password must be strong At least 8 characters long , one uppercase, one lowercase, contain at least one digit and at least one character';
  }  
  if (!data.phoneNo || !data.phoneNo.match(/^\+\d{1,3} \d{10}$/)){
    errors.phoneNo = 'Phone Number is invalid (format: +country_code number)';
  }
    // if (!data.phoneNo) {
    //   errors.phoneNo = 'Phone Number is required';
    // } else if (!/^\+\d{1,3}\d{10}$/.test(data.phoneNo)) {
    //   errors.phoneNo = 'Phone Number is invalid (format: +country_code number)';
    //   console.log(data.phoneNo)
    // }
    if (!data.country) {
      errors.country = 'Country is required';
    }
    if (!data.city) { 
      errors.city = 'City is required'; 
    }
    if (!data.panNo) {
       errors.panNo = 'Pan Number is required';
    }
    if (!data.aadharNo) {
      errors.aadharNo = 'Aadhar Number is required';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formData = {
      ...formValues,
      [name]: value
    };
    setFormValues(formData);
    console.log(formData);
    const errorsData =  validate(formData);
    setErrors(errorsData);
  };

  const handlePasswordToggle = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formValues);
    console.log(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem ("formData",JSON.stringify(formValues));
      console.log(formValues)
      navigate('/submission', { state: { formValues } });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" 
          name="firstName" 
          value={formValues.firstName} 
          placeholder='FirstName'
          onChange={handleChange} />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name</label>
          <input type="text"
           name="lastName" 
           value={formValues.lastName} 
           placeholder='lastName'
           onChange={handleChange} />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
          <label>Username</label>
          <input type="text" 
          name="username" 
          value={formValues.username}
          placeholder='username'
           onChange={handleChange} />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" 
          name="email" 
          value={formValues.email} 
          placeholder='Email'
          onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input type={formValues.showPassword ? 'text' : 'password'} 
          name="password" value={formValues.password}
          placeholder='password'
           onChange={handleChange} />
          <button className='eyes' 
          type="button" 
          onClick={handlePasswordToggle}
          style={{ marginLeft: '-35px', marginTop :'4px', cursor: 'pointer' }}
          >
            {formValues.showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text"
           name="phoneNo" 
           value={formValues.phoneNo} 
           placeholder='phoneNo'
           onChange={handleChange} />
          {errors.phoneNo && <span>{errors.phoneNo}</span>}
        </div>
        <div>
          <label>Country</label>
          <select name="country"
           value={formValues.country} 
           onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="USA">UK</option>
            <option value="USA">UAE</option>
          </select>
          {errors.country && <span>{errors.country}</span>}
        </div>
        <div>
          <label>City</label>
          <select name="city" 
          value={formValues.city}
           onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="New York">New York</option>
            <option value="New York">London</option>
            <option value="New York">Dubai</option>
          </select>
          {errors.city && <span>{errors.city}</span>}
        </div>
        <div>
          <label>PAN Number</label>
          <input type="text"
           name="panNo" 
           value={formValues.panNo} 
           placeholder='PanNo'
           onChange={handleChange} />
          {errors.panNo && <span>{errors.panNo}</span>}
        </div>
        <div>
          <label>Aadhar Number</label>
          <input type="text"
           name="aadharNo" 
           value={formValues.aadharNo}
           placeholder='AadharNo'
            onChange={handleChange} />
          {errors.aadharNo && <span>{errors.aadharNo}</span>}
        </div>
        <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
