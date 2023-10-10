import { useState } from "react";
import { Login } from "../services/user-service";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { redirect, useNavigate } from "react-router-dom";



const Signin=()=>{
  const navigate=useNavigate();
    const [data,setdata]=useState({
        email:'',
        password:''
    })
  
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setdata({
          ...data,
          [name]: value,
        });
    }
    const submitForm=(event)=>{
        event.preventDefault()
        console.log(data);
        Login(data).then((resp)=>{
            console.log(resp)
            console.log("success");
            navigate("/home")
           
        }).catch((error)=>{
            console.log(error);
            console.log("failed");
        })

    }

   
    
    
    
    return (<div className="container">
        <h2>Login</h2>
        <form onSubmit={submitForm}>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">Username</label>
            <input
              type="text"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange} className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div> );
}

export default Signin;