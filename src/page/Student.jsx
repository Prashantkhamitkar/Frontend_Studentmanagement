import React, { useState } from 'react';
import Studentsignup from '../services/Studentsignup';
import { useNavigate } from 'react-router-dom';



const Student=()=> 
 {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobilenumber:'',
    password:''
  });
const [filedata,setfiledata]=useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
Studentsignup(formData).then((res)=>{console.log(res.data)
navigate("/student")
}
);
    // Handle form submission, e.g., send data to the server
    // You can add your API request or data processing logic here

    console.log('Form Data:', formData);
  };

  return (
    <div className='container'>
      <h2>Student Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobilenumber">Mobile</label>
          <input
            type="tel"
            className="form-control"
            id="mobilenumber"
            name="mobilenumber"
            value={formData.mobilenumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Profile</label>
          <input
            type="file"
            className="form-control"
            id="file"
            name="file"
            value={filedata}
            onChange={(e)=>{
              setfiledata(e.target.value)
            }}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default Student;